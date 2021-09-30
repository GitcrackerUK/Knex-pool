exports.up = function(knex) {
  return knex.schema.createTable('Posts',table=>{
    table.increments('id');
    table.string('user')
    table.string('title')
    table.longtext('post')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Posts');
};
