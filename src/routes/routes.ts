import { Router } from 'express'
const routes = Router()

import { userCreateController } from '../controllers/users'
import { userListController } from '../controllers/users'


routes.post('/users',userCreateController)
routes.get('/users',userListController)

export default routes