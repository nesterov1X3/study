require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
  },
  pool: { min: 0, max: 200 },
  migrations: {
    directory: 'src/db/migrations'
  },
  seeds: {
    directory: 'src/db/seeds'
  }
}