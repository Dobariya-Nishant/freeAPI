import { Request, Response, NextFunction } from "express";

type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

function asyncHandler(callback: RequestHandler) {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(callback(req, res, next)).catch((err) => next(err));
  };
}

export { asyncHandler };
