
exports.up = function(knex) {
  return knex.createTable('Employee',(table)=>{
    table.increments('id');
    table.string('uid').notNullable().unique()
    table.string('firstName').notNullable()
    table.string('surnameName').notNullable()
    table.string('email').notNullable().unique()
    table.string('sse')
  })
};

exports.down = function(knex) {
  
};
