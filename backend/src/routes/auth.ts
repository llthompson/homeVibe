import express from 'express' 

import { createUser } from '../controllers/auth'

const authRouter = express.Router()

authRouter.post('/hook', createUser)

export default authRouter