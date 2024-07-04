import { Request, Response, NextFunction } from 'express';

import {
    IAuthRegisterRequest,
    IAuthRegisterResponse,
    IAuthLoginRequest,
    IAuthLoginResponse
} from './schema/auth/auth.schema';

import userServices from '../services/user.services';

const validateTokenController = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: 'Authorized.' });
};

const registerController = async (
    req: IAuthRegisterRequest,
    res: IAuthRegisterResponse,
    next: NextFunction
) => {
    try {
        // const { email, password, passwordConfirmation, firstName, lastName } = req.body;
        // Validate req.body and return 422
        const { uID } = await userServices.registerUserService(req.body);
        return res.status(200).json({
            uID: uID,
            message: 'Successfully registered.'
        });
    } catch (error) {
        res.status(500);
        next(error);
    }
};

const loginController = async (
    req: IAuthLoginRequest,
    res: IAuthLoginResponse,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;
        /*!!!!!!!!*/
        // Input must be validation
        const user = await userServices.loginUserService({ email, password });
        const { uID, firstName, lastName, isActive, accessToken } = user;
        return res.status(200).json({
            uID,
            firstName,
            lastName,
            isActive,
            accessToken
        });
    } catch (error) {
        res.status(500);
        next(error);
    }
};

const AuthController = {
    validateTokenController,
    registerController,
    loginController
};

export default AuthController;
