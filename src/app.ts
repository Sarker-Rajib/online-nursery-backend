import express, { Request, Response } from "express";
import cors from "cors";

// define app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// app routes
app.get("/", (req: Request, res: Response) => {
  res.send("! ==> Welcome to online Nursery <== !");
});

// ------- routes ended ------- //

// error handlers

// not found route

export default app;
