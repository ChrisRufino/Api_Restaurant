import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/utils/AppError';
import { knex } from '@/database/knex';
import { z } from 'zod';

class OrdersController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodyschema = z.object({
        table_session_id: z.number(),
        product_id: z.number(),
        quantity: z.number(),
      });

      const { table_session_id, product_id, quantity } = bodyschema.parse(
        request.body,
      );

      const session = await knex<TablesSessionsRepository>('Table_sessions')
        .where({ id: table_session_id })
        .first();

      if (!session) {
        throw new AppError('Table session not found', 404);
      }

      if (session.closed_at) {
        throw new AppError('Table session is closed', 400);
      }

      const product = await knex<ProductRepository>('products')
        .where({ id: product_id })
        .first();

      if (!product) {
        throw new AppError('Product not found', 404);
      }

      await knex<OrdersRepository>('orders').insert({
        table_session_id,
        product_id,
        quantity,
        price: product.price,
      });

      return response.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
}

export { OrdersController };
