import { Request, Response, NextFunction } from 'express';

const pingController = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

export default {
    pingController
};
