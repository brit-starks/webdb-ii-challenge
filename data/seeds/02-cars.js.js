
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'toyota', model: 'camry', milage: '90K', transmission: "automatic"},
        { make: 'ford', model: 'focus', milage: '52K', transmission: "stick"},
        { make: 'nissan', model: 'altima', milage: '37K', transmission: "automatic"},
        { make: 'mazda', model: '6', milage: '5K', transmission: "stick"},
        { make: 'toyota', model: 'corolla', milage: '72K', transmission: "stick"},
        { make: 'chevy', model: 'corvette', milage: '30K', transmission: "stick"}
      ]);
    });
};
