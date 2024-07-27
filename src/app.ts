import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import GlobalErrorHandler from "./app/middlewares/GlobalErrorHandlers";

// define app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// app routes
app.get("/", (req: Request, res: Response) => {
  res.send("! ==> Welcome to online Nursery <== !");
});
app.use("/api/v1", router);

// ------- routes ended ------- //

// error handlers
app.use(GlobalErrorHandler);

// not found route

export default app;
