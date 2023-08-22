import { Pool } from "pg";
import { knex } from 'knex'
import * as constants from '../constants/db.constants'

const connectionString = process.env.RESTRICTED;

const db = new Pool({
  connectionString,
})

db.on("error", (error: Error) =>{
  console.error(error.message)
})

const kx_res = knex({
          client: 'pg',
          connection: process.env.RESTRICTED,
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

const kx_unres = knex({
  client: 'pg',
  connection: process.env.UNRESTRICTED,
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

// const kx = (connection)=>{
//   switch(connection){
//     case constants.RESTRICTED: {
//       return knex({
//         client: 'pg',
//         connection: process.env.RESTRICTED,
//         searchPath: ['public_test'],
//         pool: {
//           min: 2,
//           max: 6,
//           createTimeoutMillis: 3000,
//           acquireTimeoutMillis: 30000,
//           idleTimeoutMillis: 30000,
//           reapIntervalMillis: 1000,
//           createRetryIntervalMillis: 100,
//           propagateCreateError: false 
//         },
//       });
//     }
//     case constants.UNRESTRICTED: {
//       return knex({
//         client: 'pg',
//         connection: process.env.UNRESTRICTED,
//         searchPath: ['public_test'],
//         pool: {
//           min: 2,
//           max: 6,
//           createTimeoutMillis: 3000,
//           acquireTimeoutMillis: 30000,
//           idleTimeoutMillis: 30000,
//           reapIntervalMillis: 1000,
//           createRetryIntervalMillis: 100,
//           propagateCreateError: false 
//         },
//       });
//     }
//   }
// }
export {db, kx_res, kx_unres}