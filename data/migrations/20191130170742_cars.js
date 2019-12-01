
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('VIN').unique().notNullable();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.integer('milage').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
