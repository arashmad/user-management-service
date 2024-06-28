import { User } from '../models/user.model';

import dataSourceFactory from '../database';

import { ICreateUserRequest } from '../interface/user.interface';

/**
 * Create new user account.
 * @param {ICreateUserRequest}
 */
export const createUser = (userIn: ICreateUserRequest) =>
    new Promise((resolve, reject) => {
        const uid = '12313-123132-123123';
        const hashedPassword = userIn.password;

        const user = new User();
        user.uid = uid;
        user.email = userIn.email;
        user.password = hashedPassword;
        user.firstName = userIn.firstName;
        user.lastName = userIn.lastName;

        dataSourceFactory.manager
            .save(user)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });

const UserCRUD = {
    createUser
};

export default UserCRUD;
