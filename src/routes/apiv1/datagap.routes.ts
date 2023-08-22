import { Router } from 'express'
import * as controllers from '../../controllers/datagap.controller'



const routes = Router()

routes.get('/', controllers.getMany)


export default routes;