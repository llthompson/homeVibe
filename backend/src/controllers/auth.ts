import { Express, Request, Response } from "express"
import db from "../db"


export const createUser = async (req: Request, res: Response) => {
    console.log('okay logging in auth file')
    const user = await db.user.create({
        data: {
            email: req.body.email,
            auth0ID: req.body.user_id
        }
    })
    console.log('is there a user here', user)
    res.json({
        message: 'success'
    })
}