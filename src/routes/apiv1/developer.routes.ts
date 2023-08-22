import { Router } from 'express'
import apiGen from '../../controllers/developers.controller'

const devroutes = Router()

devroutes.get('/', apiGen)


export default devroutes;