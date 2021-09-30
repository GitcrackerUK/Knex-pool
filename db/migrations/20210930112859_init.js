exports.up = function (knex) {
    return knex.schema.createTable('Employees', (table) => {
        table.increments('id');
        table.string('uid').notNullable().unique();
        table.string('first_name').notNullable();
        table.string('surname_name').notNullable();
        table.string('email').notNullable().unique();
        table.string('sse');
        table.timestamp(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Employees');
};
