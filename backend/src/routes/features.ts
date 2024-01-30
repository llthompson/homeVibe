import express from 'express'
import { checkJwt } from '../middleware/auth'
import { createUserFeature, getUserFeatures, saveFeaturesByUser, adminFeatureAdd, adminFeatureDelete } from '../controllers/features'

const featureRouter = express.Router()

featureRouter.post('/', checkJwt, createUserFeature)
featureRouter.get('/', checkJwt, getUserFeatures)
featureRouter.put('/', checkJwt, saveFeaturesByUser)
featureRouter.post('/admin', adminFeatureAdd)
featureRouter.delete('/admin', adminFeatureDelete)


export default featureRouter