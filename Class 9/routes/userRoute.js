import express from 'express'
import { login, signup } from '../controllers/userLogic.js'
import { getteacher, getuser } from '../controllers/studentLogic.js'
import { auth, checkTeacherRole} from '../middleware/auth.js'

const router = express.Router()

router.post('/signup', signup)

router.post('/login', login)


router.get('/getuser'  , auth,  getuser )


router.get('/getteacher' ,auth,  checkTeacherRole, getteacher )







export default router