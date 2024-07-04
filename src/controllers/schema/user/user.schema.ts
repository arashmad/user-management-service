import { Request, Response } from 'express';

import * as IUser from './user.interface';
import { IResponseBodyError } from '../error.interface';

/**
 * [POST] /user request schema.
 */
export interface IUserRequest<P = any, T = any, R = IUser.IUserRequestBody, S = any>
    extends Request<P, T, R, S> {}

/**
 * [POST] /user response schema.
 */
export interface IUserResponse<S = IUser.IUserResponseBody | IResponseBodyError>
    extends Response<S> {}
