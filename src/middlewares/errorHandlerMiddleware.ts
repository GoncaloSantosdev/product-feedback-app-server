import { Request, Response, NextFunction } from "express";

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = (err as any).statusCode || 500;
  const message = err.message || "Internal Server Error";
  const stack = err.stack;

  console.error(err);

  res.status(statusCode).json({
    success: false,
    message,
    stack,
  });
};

export default errorHandlerMiddleware;
