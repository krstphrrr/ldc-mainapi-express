import { Pool } from "pg";
import { knex } from 'knex'


const connectionString = process.env.DBASE;

const db = new Pool({
  connectionString,
})

db.on("error", (error: Error) =>{
  console.error(error.message)
})

const kx = knex({
  client: 'pg',
  connection: connectionString,
  searchPath: ['public_test'],
  pool: {
    min: 2,
    max: 6,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false 
  },
});

export {db, kx}