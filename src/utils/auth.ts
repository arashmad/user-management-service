import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { configurationFactory } from '../config/config';

const { tokenConfig } = configurationFactory();

/**
 * Asynchronously function that generates hashed password
 * @param {string} password Password to be hashed
 * @returns {Promise<string>} Promise with resulting hashed password
 */
export const generateHashPassword = async (password: string): Promise<string> => {
    try {
        /**
         * TODO for the next time => more security
         * 
         bcryptjs.genSalt(10, function(err, salt) {
            bcryptjs.hash("B4c0/\/", salt, function(err, hash) {
                // Store hash in your password DB.
            });
        });
        */
        return await bcryptjs.hash(password, 10);
    } catch (error) {
        throw error;
    }
};

export const checkPasswordMatch = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    try {
        return await bcryptjs.compare(password, hashedPassword);
    } catch (error) {
        throw error;
    }
};

/**
 * It needs JDocs
 * */
export const createJsonToken = (email: string): string => {
    try {
        const { secret, expireIn } = tokenConfig;

        const jwtPayload = { email };
        const jwtSecret = secret;
        return jwt.sign(jwtPayload, jwtSecret, {
            issuer: 'myApplication',
            expiresIn: expireIn,
            algorithm: 'HS256'
        });
    } catch (error: unknown) {
        throw error;
    }
};

const authUtils = {
    generateHashPassword,
    checkPasswordMatch,
    createJsonToken
};

export default authUtils;
