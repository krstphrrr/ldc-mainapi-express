
import express from 'express'
import dataGapRoutes from './apiv1/datagap.routes'

const routes = express.Router()

routes.use('/dataGap', dataGapRoutes)

export default routes