import express, { Express, Request, Response } from "express";
import db from "./db";

import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.get("/", async (req: Request, res: Response) => {
  const blah = await db.homeFeature.findMany()
  res.json(blah);
});

app.listen(port, () => {
  console.log(`[server]: We're chillin' at port http://localhost:8000`);
});