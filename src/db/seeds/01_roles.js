exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(() =>
      knex('role').insert([
        {
          id: '3331175e-2de2-11ed-a261-0242ac120002', title: 'admin'
        },
        {
          id: '7651175e-2de2-11ed-a261-0242ac120002', title: 'student'
        },
        {
          id: '5671175e-2de2-11ed-a261-0242ac120002', title: 'mentor'
        }
      ])
    )
};
