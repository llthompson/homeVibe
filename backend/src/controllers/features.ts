import { Express, Request, Response } from "express"
import db from "../db"
import { FeatureType, Rating } from "@prisma/client"


export const createUserFeature = async (req: any, res: Response) => {

    const user = await db.user.findFirst({
        where: {
            auth0ID: req.auth.payload.sub
        }
    })

    console.log('wher u at', user)

    const feature = await db.homeFeature.create({
        data: {
            feature: req.body.feature,
            type: FeatureType.CUSTOM,
            userId: user?.id
        }
    })
    res.json(feature)
}

export const saveFeaturesByUser = async (req: any, res: Response) => {
    const user = await db.user.findFirst({
        where: {
            auth0ID: req.auth.payload.sub
        }
    })
    const data = req.body.feature.map((f: { id: number; rating: Rating }) => {
        return {
            featureId: f.id,
            rating: f.rating,
            userId: user?.id
        }
    })
    const savedFeatures = await db.savedFeature.createMany({
        data
    })
    res.json(savedFeatures)

}

// change to get global features?
export const getUserFeatures = async (req: any, res: Response) => {
    console.log('req auth', req.auth)
    const user = await db.user.findFirst({
        where: {
            auth0ID: req.auth.payload.sub
        }
    })

    console.log('thisuser', user)

    const feature = await db.homeFeature.findMany({
        where: {
            OR: [
                {
                    userId: user?.id
                },
                {
                    userId: null
                }
            ]
        }
    })
    res.json(feature)
}