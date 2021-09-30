let createEmployee = require('../createEmployee');
require('dotenv').config();

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: 'root',
        password: 'Password',
        database: 'Pool',
    },
    pool: {
        min: parseInt(process.env.DB_MIN_CONNECTION_POOL_SIZE),
        max: parseInt(process.env.DB_MAX_CONNECTION_POOL_SIZE),
    },
    migrations: {
        tableName: 'knex_migrations'
      }
};
