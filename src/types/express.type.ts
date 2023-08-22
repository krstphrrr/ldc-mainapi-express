import { Request as ExpressRequest, Response, NextFunction } from 'express';

export interface CustomApiRequest extends ExpressRequest {
  isUsingMainKey?: boolean;
}

export interface MiddleWare {
  (req: CustomApiRequest, res: Response, next: NextFunction): void;
}