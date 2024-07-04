import { ConnectDB } from '../database';
import authUtils from '../utils/auth';

import { IUserTable } from '../database/user.model';
import { IQuery } from '../interface/crud.interface';
import * as IService from './user.interface';

/**
 * Login service.
 * @param {IService.ILoginUserInput} inUser Parameters for user registration
 * @returns {IService.ILoginUserOutput}
 */

const loginUserService = async (
    inUser: IService.ILoginUserInput
): Promise<IService.ILoginUserOutput> => {
    try {
        const { email, password } = inUser;

        // Login query object
        const query: IQuery = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        };

        /*!!!!!!!!*/
        // Should be a single function by overloading return types
        const connection = await ConnectDB();
        const result = await connection.query<IUserTable>(query);
        connection.release();

        const user = result.rows[0];

        if (!user) {
            /*!!!!!!!!*/
            // handing error status code
            // calling next()
            throw new Error('User not found.');
        }

        await authUtils.checkPasswordMatch(password, user.password);
        const token = authUtils.createJsonToken(email);

        return {
            uID: user.u_id,
            firstName: user.first_name,
            lastName: user.last_name,
            isActive: user.is_active,
            accessToken: token
        };
    } catch (error) {
        throw error;
    }
};

/**
 * Registration service.
 * @param {IService.IRegisterUserInput} inUser Parameters for user registration
 * @returns {IService.IRegisterUserOutput}
 */

const registerUserService = async (
    inUser: IService.IRegisterUserInput
): Promise<IService.IRegisterUserOutput> => {
    try {
        const { email, password, firstName, lastName } = inUser;
        const hashedPassword = await authUtils.generateHashPassword(password);
        const query: IQuery = {
            text: `
            INSERT INTO users(email, password, first_name, last_name)
            VALUES($1, $2, $3, $4) RETURNING *`,
            values: [email, hashedPassword, firstName || '', lastName || '']
        };
        /*!!!!!!!!*/
        // Should be a single function by overloading return types
        const connection = await ConnectDB();
        /*!!!!!!!!*/
        // If query failed to be executed, connection remains open
        const result = await connection.query<IUserTable>(query);
        connection.release();

        const row = result.rows[0];
        const uID = row.u_id;
        return { uID };
    } catch (error) {
        throw error;
    }
};

const userServices = {
    loginUserService,
    registerUserService
};

export default userServices;
