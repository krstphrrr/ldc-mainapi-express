import { Router } from 'express'
import * as controllers from '../../controllers/datagap.controllers'


const routes = Router()

routes.get('/', controllers.getMany)

export default routes;