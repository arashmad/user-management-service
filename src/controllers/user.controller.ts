// import { Request, Response, NextFunction } from 'express';

// import { IUserRequest, IUserResponse } from './schema/user.schema';

// import { ConnectDB, RunQuery} from '../database';

// const LOG_NAMESPACE = '[/user]';

// const getAllUserController = (req: Request, res: Response, next: NextFunction) => {};

// const createUserController = (req: IUserRequest, res: IUserResponse) => {
//     logging.info(LOG_NAMESPACE, 'Creating users ...');

//     // TODOs:
//     // 1. Request Validation
//     // 2. User exists?
//     // 3. ?

//     ConnectDB()
//         .then((connection) => {
//             Query(connection, 'SELECT * FROM user')
//                 .then((result) => {
//                     const userID = '1234';
//                     res.status(200).json({
//                         uid: userID,
//                         message: `User (${userID}) was created.`
//                     });
//                 })
//                 .catch((error) => {
//                     logging.error(LOG_NAMESPACE, error.message);
//                     res.status(500).json({
//                         message: `Failed to create user. ${error.message}`,
//                         error
//                     });
//                 })
//                 .finally(() => {
//                     connection.end();
//                 });
//         })
//         .catch((error) => {
//             logging.error(LOG_NAMESPACE, error.message);
//             res.status(500).json({
//                 message: `Failed to connect to database. ${error.message}`,
//                 error
//             });
//         });
// };

// const UserControllers = {
//     createUserController
// };

// export default UserControllers;
