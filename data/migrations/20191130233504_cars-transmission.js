
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.string('transmission');
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('transmission');
  });
};
