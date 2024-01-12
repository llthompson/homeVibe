import { Express, Request, Response } from "express"
import db from "../db"


export const createUserFeature = async (req: Request, res: Response) => {
    console.log('myreq', req.body)

    // const user = await db.homeFeature.create({
    //     data: {

    //     }
    // })
    res.json({
        message: 'success'
    })
}