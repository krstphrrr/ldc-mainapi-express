import { Pool, QueryResult } from "pg";
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
});

export {db, kx}