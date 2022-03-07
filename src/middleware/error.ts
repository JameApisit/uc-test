import { Request, Response, NextFunction } from "express";

export const error = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).json(err);
};
