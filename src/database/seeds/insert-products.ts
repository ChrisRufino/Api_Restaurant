import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del();

  await knex('products').insert([
    { name: 'Pizza margherita', price: 60 },
    { name: 'Hambúrguer artesanal', price: 35 },
    { name: 'Batata frita com cheddar', price: 25 },
    { name: 'Lasanha à bolonhesa', price: 50 },
    { name: 'Filé de peixe grelhado', price: 70 },
    { name: 'Salada caesar', price: 30 },
    { name: 'Escondidinho de carne seca', price: 45 },
    { name: 'Macarrão ao molho pesto', price: 40 },
    { name: 'Frango à parmegiana', price: 55 },
  ]);
}
