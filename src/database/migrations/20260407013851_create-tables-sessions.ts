import { table } from 'console';
import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Table_sessions', (table) => {
    (table.increments('id').primary(),
      table
        .integer('table_id')
        .notNullable()
        .references('id')
        .inTable('tables'));
    table.timestamp('opened_at').defaultTo(knex.fn.now());
    table.time('closed_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Tables_sessions');
}
