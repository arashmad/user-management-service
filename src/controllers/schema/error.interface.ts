/**
 * Response body interface for [*] /* for failed requests
 * @param {string} message Error message
 * @param {Error} error Error object
 */
export interface IResponseBodyError {
    message: string;
    error: Error;
}
