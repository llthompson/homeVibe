// 

import { Express, Request, Response } from "express"
import db from "../db"
import { FeatureType, Rating } from "@prisma/client"
import { error } from "console"


export const createUserFeature = async (req: any, res: Response) => {
    // console.log('where is my body', req.body)
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
    console.log('starting log to debug')
    const user = await db.user.findFirst({
        where: {
            auth0ID: req.auth.payload.sub
        }
    })
    console.log('logging da user', user)
    const rating = mapToRating(req.body.rating)
    console.log('logging da rating', rating)
    if (user) {
        console.log('is it getting to this part')
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

// change to get global features?
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