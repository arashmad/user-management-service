import { IPostUserRequest, IPostUserResponse } from './schema/user.schema';

import UserCRUD from '../crud/user.crud';

const createUserController = (req: IPostUserRequest, res: IPostUserResponse) => {
    // logging.info(NAMESPACE, 'Fetching all users');

    // TODOs:
    // 1. Request Validation
    // 2. ?

    UserCRUD.createUser(req.body)
        .then((result) => {
            return res.status(200).json({
                uid: '',
                message: ''
            });
        })
        .catch((error) => {
            return res.status(500).json({
                error,
                message: error.message
            });
        });
};

const UserControllers = {
    createUserController
};

export default UserControllers;
