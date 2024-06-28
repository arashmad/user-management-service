import { Request, Response } from 'express';

import { ICreateUserRequest, ICreateUserResponseOK, ICreateUserResponseError } from '../../interface/user.interface';

/**
 * [POST] /user request schema.
 */
export interface IPostUserRequest<P = any, T = any, R = ICreateUserRequest, S = any> extends Request<P, T, R, S> {}

/**
 * [POST] /user response schema.
 */
export interface IPostUserResponse<S = ICreateUserResponseOK | ICreateUserResponseError> extends Response<S> {}
