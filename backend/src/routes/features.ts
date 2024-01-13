import express from 'express'
import { checkJwt } from '../middleware/auth'
import { createUserFeature, getUserFeatures } from '../controllers/features'

const featureRouter = express.Router()

featureRouter.post('/', checkJwt, createUserFeature)
featureRouter.get('/', checkJwt, getUserFeatures)

export default featureRouter