/**
 * Interface of input object to create a new account.
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirmation
 * @param {string} firstName
 * @param {string} lastName
 */
export interface ICreateUserRequest {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
}

/**
 * Interface of output object to create a new account.
 * @param {string} uid User ID
 * @param {string} message Information message
 */
export interface ICreateUserResponseOK {
    uid: string;
    message: string;
}

/**
 * Interface of output object to create a new account.
 * @param {string} message Error message
 * @param {Error} error Error object
 */
export interface ICreateUserResponseError {
    error: Error;
    message: string;
}
