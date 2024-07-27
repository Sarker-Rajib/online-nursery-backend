import { ErrorRequestHandler } from "express";

const GlobalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);

  return res.send({
    success: false,
    err,
  });
};

export default GlobalErrorHandler;
