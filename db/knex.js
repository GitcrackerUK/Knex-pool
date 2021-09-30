require('dotenv').config({ path: '../.env' });

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
        min: parseInt(process.env.DB_MIN_CONNECTION_POOL_SIZE,10) || 2,
        max: parseInt(process.env.DB_MAX_CONNECTION_POOL_SIZE,10) || 10,
    },
    migrations: {
        tableName: 'knex_migrations'
      }
};
