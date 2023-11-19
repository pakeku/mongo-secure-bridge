import express, { Request, Response } from 'express';

export const healthRouter = express.Router();

healthRouter.all('*', (_: Request, res: Response): void => {
    res.status(200).json({ message: 'System is up and running' });
});