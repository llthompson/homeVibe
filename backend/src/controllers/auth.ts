import { Express, Request, Response } from "express"

export const createUser = (req: Request, res: Response) => {
    console.log('myreq', req.body)
    res.json({
        message: 'success'
    })
}