import { Request, Response } from 'express';

import * as IAuth from './auth.interface';
import { IResponseBodyError } from '../error.interface';

/*------------------------------------------------------------
 * Request<P, T, R, S, L>
 * P = path params, expects a [key: string]: string dictionary
 * T = response body, expects any
 * R = request body, expects any
 * S ReqQuery = request query, expects any
 * L Locas = request locals, expects any
 *
 * Response<S, L>
 * S ReqQuery = response body, expects any
 * L Locas = response locals, expects [string]: any
 *
 * Reference:
 * https://greenydev.com/blog/extend-express-types/
 *------------------------------------------------------------*/

/**
 * [POST] /auth/login request schema.
 */
export interface IAuthLoginRequest<P = any, T = any, R = IAuth.IAuthLoginRequestBody, S = any>
    extends Request<P, T, R, S> {}

/**
 * [POST] /auth/login response schema.
 */
export interface IAuthLoginResponse<S = IAuth.IAuthLoginResponseBody | IResponseBodyError>
    extends Response<S> {}

/**
 * [POST] /auth/register request schema.
 */
export interface IAuthRegisterRequest<P = any, T = any, R = IAuth.IAuthRegisterRequestBody, S = any>
    extends Request<P, T, R, S> {}

/**
 * [POST] /auth/register response schema.
 */
export interface IAuthRegisterResponse<S = IAuth.IAuthRegisterResponseBody | IResponseBodyError>
    extends Response<S> {}
