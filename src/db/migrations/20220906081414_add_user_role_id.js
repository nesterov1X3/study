/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.transaction(async (trx) => {
    await trx.schema.transacting(trx).alterTable('users', table => {
      table.uuid('role_id').references('id').inTable('role');
    })
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.alterTable('users', table => {
    table.dropForeign('role_id');
  })
};
