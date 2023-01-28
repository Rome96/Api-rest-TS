import { NextFunction, Request, Response } from "express";

const LogMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  const userAgent = headers['user-agent'];
  console.log("User-agent ==>", userAgent);
  next();
};

export {
  LogMiddleware
};