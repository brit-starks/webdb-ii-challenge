
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'toyota', model: 'camry', milage: '90K'},
        { make: 'ford', model: 'focus', milage: '52K', },
        { make: 'nissan', model: 'altima', milage: '37K'},
        { make: 'mazda', model: '6', milage: '5K'},
        { make: 'toyota', model: 'corolla', milage: '72K'},
        { make: 'chevy', model: 'corvette', milage: '30K'}
      ]);
    });
};
