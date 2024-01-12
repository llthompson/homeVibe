import express from 'express'
import { checkJwt } from '../middleware/auth'
import { createUserFeature } from '../controllers/features'

const featureRouter = express.Router()

featureRouter.post('/', checkJwt, createUserFeature)

export default featureRouter