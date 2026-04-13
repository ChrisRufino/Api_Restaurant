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

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { table_session_id } = request.params;

      const orders = await knex<OrdersRepository>('orders')
        .select(
          'orders.id',
          'orders.table_session_id',
          'orders.product_id',
          'products.name as product_name',
          'orders.price',
          'orders.quantity',
          knex.raw('orders.price * orders.quantity as total_price'),
          'orders.created_at',
          'orders.updated_at',
        )
        .join('products', 'products.id', 'orders.product_id')
        .where({ table_session_id })
        .orderBy('orders.created_at', 'desc');

      return response.json(orders);
    } catch (error) {
      next(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { table_session_id } = request.params;

      const order = await knex('orders')
        .select(
          knex.raw('COALESCE(SUM(orders.price * orders.quantity), 0) as total'),
          knex.raw('COALESCE(SUM(orders.quantity), 0) as quantity'),
        )
        .where({ table_session_id })
        .first();

      return response.json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { OrdersController };
