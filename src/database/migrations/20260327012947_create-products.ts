import { table } from 'console';
import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    (table.increments('id').primary(),
      table.text('name').notNullable(), // coluna nome text
      table.decimal('price').notNullable(), // coluna de preço, por isso decimal
      table.timestamp('created_at').defaultTo(knex.fn.now()), // criar data automatica
      table.timestamp('updated_at').defaultTo(knex.fn.now()));
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products');
}
