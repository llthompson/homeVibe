// 

import { Response } from "express"
import db from "../db"
import { FeatureType, Rating } from "@prisma/client"


export const createUserFeature = async (req: any, res: Response) => {
    const user = await db.user.findFirst({
        where: {
            auth0ID: req.auth.payload.sub
        }
    })

    const feature = await db.homeFeature.create({
        data: {
            feature: req.body.feature,
            type: FeatureType.CUSTOM,
            userId: user?.id
        }
    })
    res.json(feature)
}

export const adminFeatureAdd = async (req: any, res: Response) => {

    const feature = await db.homeFeature.create({
        data: {
            feature: req.body.feature,
            type: req.body.type,
        }
    })
    res.json(feature)
}

export const adminFeatureDelete = async (req: any, res: Response) => {
    const savedFeature = await db.savedFeature.deleteMany({
        where: {
            featureId: req.body.id,
        },

    })
    const feature = await db.homeFeature.delete({
        where: {
            id: req.body.id,
        },

    })
    res.json(feature)
}

function mapRatingToNumber(rating: Rating | null): number {
    const mapping: Record<Rating, number> = {
        "NOT_ESSENTIAL": 1,
        "NICE_BONUS": 2,
        "FAIRLY_IMPORTANT": 3,
        "VERY_DESIRABLE": 4,
        "NON_NEGOTIABLE": 5,
    };

    return rating ? mapping[rating] : 0;
}
function mapToRating(numberValue: number): Rating | null {
    const reverseMapping: Record<number, Rating> = {
        1: "NOT_ESSENTIAL",
        2: "NICE_BONUS",
        3: "FAIRLY_IMPORTANT",
        4: "VERY_DESIRABLE",
        5: "NON_NEGOTIABLE",
    };

    return reverseMapping[numberValue] || null;
}


export const saveFeaturesByUser = async (req: any, res: Response) => {
    const user = await db.user.findFirst({
        where: {
            auth0ID: req.auth.payload.sub
        }
    })
    const rating = mapToRating(req.body.rating)

    if (user) {
        const savedFeatures = await db.savedFeature.upsert({
            where: {
                featureId_userId: {
                    featureId: req.body.id, userId: user.id
                }
            },
            update: {
                rating: rating,
            },
            create: {
                featureId: req.body.id,
                rating: rating,
                userId: user?.id
            },
        })
        res.json(savedFeatures)
    }
    else {
        throw new Error('')
    }
}

export const getUserFeatures = async (req: any, res: Response) => {

    const user = await db.user.findFirst({
        where: {
            auth0ID: req.auth.payload.sub
        }
    })

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
        },
        include: {
            featureRatings: {
                where: {
                    userId: user?.id
                }
            }
        }
    })

    res.json(feature.map(f => {
        return {
            ...f, rating: f.featureRatings.length > 0 ? mapRatingToNumber(f.featureRatings[0].rating) : 0
        }
    }))

}