/**
 * Request body interface for [POST] /user
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirmation
 * @param {string} firstName
 * @param {string} lastName
 */
export interface IUserRequestBody {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
}

/**
 * Response body interface for [POST] /user
 * @param {string} uid User ID
 * @param {string} message Information message
 */
export interface IUserResponseBody {
    uid: string;
    message: string;
}

/**
 * It needs JDocs
 * @param {string} email
 * @param {string} password
 */
export interface IUser {
    email: string;
    password: string;
}
