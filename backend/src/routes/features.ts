import express from 'express'
import { checkJwt } from '../middleware/auth'
import { createUserFeature, getUserFeatures, saveFeaturesByUser } from '../controllers/features'

const featureRouter = express.Router()

featureRouter.post('/', checkJwt, createUserFeature)
featureRouter.get('/', checkJwt, getUserFeatures)
featureRouter.put('/', checkJwt, saveFeaturesByUser)

export default featureRouter