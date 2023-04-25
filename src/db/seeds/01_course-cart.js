exports.seed = function (knex) {
  return knex('course_cart')
    .then(() =>
      knex('course_cart').insert([
        {
          user_id: '4412865e-2de2-11ed-a261-0242ac120026', course_id: '8931175e-2de2-11ed-a261-0242ac120002'
        }
      ])
    );
};