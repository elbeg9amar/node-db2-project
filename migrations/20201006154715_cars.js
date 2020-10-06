
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN', 20).notNullable().unique().index();
        tbl.string('make', 25).notNullable().index();
        tbl.string('model', 25).notNullable().index();
        tbl.integer('mileage', 25).notNullable().index().time();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
