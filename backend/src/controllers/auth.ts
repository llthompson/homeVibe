import { Express, Request, Response } from "express"
import db from "../db"


export const createUser = async (req: Request, res: Response) => {
    console.log('myreq', req.body)

    const user = await db.user.create({
        data: {
            email: req.body.email,
            auth0ID: req.body.user_id
        }
    })
    res.json({
        message: 'success'
    })
}