
import express from 'express'
import dataGapRoutes from './apiv1/datagap.routes'
import devroutes from './apiv1/developer.routes'
import validateApiKey from '../middleware/apivalidate.middleware'

const routes = express.Router()

routes.use('/dataGap',validateApiKey, dataGapRoutes)
routes.use('/developer', devroutes)

export default routes