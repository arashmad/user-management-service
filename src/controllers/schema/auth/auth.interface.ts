/**
 * Request body interface for [POST] /auth/register
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirmation
 * @param {string} firstName
 * @param {string} lastName
 */
export interface IAuthRegisterRequestBody {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName?: string;
    lastName?: string;
}

/**
 * Response body interface for [POST] /auth/register
 * @param {string} uID User ID
 * @param {string} message Information message
 */
export interface IAuthRegisterResponseBody {
    uID: string;
    message?: string;
}

/**
 * Response body interface for [POST] /auth/login
 * @param {string} email
 * @param {string} password
 */
export interface IAuthLoginRequestBody {
    email: string;
    password: string;
}

/**
 * Response body interface for [POST] /auth/register
 * @param {string} uID User ID
 * @param {string} firstName User first name
 * @param {string} lastName User last name
 * @param {boolean} isActive If user active or not
 * @param {string} accessToken Token
 */
export interface IAuthLoginResponseBody {
    uID: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    accessToken: string;
}
