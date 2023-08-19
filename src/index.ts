// external modules
import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'

// internal modules 
require('dotenv').config()
import {db} from './services/database'
import routes from './routes';
import errorMiddleware from './middleware/error.middleware'

const app: Application = express()
// ex bodyparser
app.use(express.json())
// cors and extended headers
app.use(cors())
app.use(helmet())
// improved http logs
app.use(morgan('dev'))

// ratelimit middleware
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'rate limit reached!',
  })
)

// test db 
db.connect().then(client =>{
  return client
    .query('select NOW();')
    .then((res)=>{
      client.release()
      console.log(res.rows)
  }).catch(err=>{
      client.release()
      console.log(err.stack)
  })
})
//  routes on v1 api
app.use('/api/v1', routes)

// error handler middleware
app.use(errorMiddleware)

app.use((_: Request, res: Response) => {
  res.status(404).json({
    message:
      'Not found!',
  })
})

app.listen(process.env.PORT || 9044, () => {
  console.log(`[App]: Server listening on 9044`)
})