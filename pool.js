let createEmployee = require('./createEmployee');
require('dotenv').config();


const knex = require('knex')({
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
});

knex.raw('SELECT VERSION()')
    .then((version) => console.log(version[0][0]))
    .catch((err) => {
        console.log(err);
        throw err;
    })
    .finally(() => {
        knex.destroy();
    });
