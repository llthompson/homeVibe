// backend/src/index.ts

import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import db from "./db";
import authRouter from './routes/auth'
import featureRouter from "./routes/features";
import dotenv from "dotenv";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json())
app.use('/api/auth', authRouter)
app.use('/api/feature', featureRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'You up?'

  })
})
app.listen(port, () => {
  console.log(`[server]: We're chillin' at port http://localhost:8000`);
});