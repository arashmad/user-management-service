import {
    IAuthLoginRequestBody,
    IAuthRegisterRequestBody
} from '../controllers/schema/auth/auth.interface';

/**
 * Registration function input interface
 */
export interface IRegisterUserInput extends IAuthRegisterRequestBody {}

/**
 * Registration function output interface
 * @param {string} uID User ID
 */
export interface IRegisterUserOutput {
    uID: string;
}

/**
 * Login function input interface
 */
export interface ILoginUserInput extends IAuthLoginRequestBody {}

/**
 * Login function output interface
 * @param {string} uID User ID
 * @param {string} firstName User first name
 * @param {string} lastName User last name
 * @param {boolean} isActive If user active or not
 * @param {string} accessToken Token
 */
export interface ILoginUserOutput {
    uID: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    accessToken: string;
}
