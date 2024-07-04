import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { configurationFactory } from '../config/config';
const { tokenConfig } = configurationFactory();

const LOG_NAMESPACE = 'AUTH';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    logging.info(LOG_NAMESPACE, '.: Token Validation :.');

    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, tokenConfig.secret, (error, decoded) => {
            if (error) {
                res.status(404).json({ message: error.message, error });
            } else {
                res.locals.jwt = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized.' });
    }
};

export default extractJWT;
