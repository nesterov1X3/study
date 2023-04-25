exports.up = function (knex) {
  return knex.transaction(async (trx) => {
    await trx.schema.transacting(trx).alterTable('course_cart', table => {
      table.dropColumn('id');
      table.primary(['user_id', 'course_id']);
    })
  })
};


exports.down = function (knex) {
  knex.schema.alterTable('course_cart', table => {
    table.dropPrimary(['user_id', 'course_id'])
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
  })
};
