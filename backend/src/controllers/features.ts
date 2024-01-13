import { Express, Request, Response } from "express"
import db from "../db"
import { FeatureType } from "@prisma/client"


export const createUserFeature = async (req: Request, res: Response) => {
    console.log('myreq', req.body)

    const feature = await db.homeFeature.create({
        data: {
            feature: req.body.feature,
            type: FeatureType.CUSTOM
        }
    })
    res.json(feature)
}