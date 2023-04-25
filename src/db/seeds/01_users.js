exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          id: '6543175e-2de2-11ed-a261-0242ac120002', name: 'Smith', password: "fewf332da3da", surname: 'Greb', mail: 'smith@gmail.com', role_id: '3331175e-2de2-11ed-a261-0242ac120002'
        }
      ])
    );
};