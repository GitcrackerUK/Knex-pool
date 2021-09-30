const knex = require('knex');
const settings = require('./knex');

const db = knex(settings);
module.exports = db;