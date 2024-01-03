import express, { Express, Request, Response } from "express";
// import dotenv from "dotenv";

// dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("homeVibe Server");
});

app.listen(port, () => {
  console.log(`[server]: We're chillin' at port http://localhost:${port}`);
});