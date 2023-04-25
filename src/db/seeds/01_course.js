exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('courses')
    .del()
    .then(() =>
      knex('courses').insert([
        {
          id: '8931175e-2de2-11ed-a261-0242ac120002', name: 'node js', description: "about node", price: 10, link: 'http:nodejs', reserved: false
        },
      ])
    );
};
