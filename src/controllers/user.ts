import { Request, Response, NextFunction } from 'express';

import { ConnectDB, QueryDB } from '../config/database';

const NAMESPACE = 'Users';

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Fetching all users');

    let query = 'SELECT * FROM users';

    ConnectDB()
        .then((client) => {
            QueryDB(client, query)
                .then((results) => {
                    return res.status(200).json({
                        users: results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error);
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    client.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const createUser = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Creating a new user');

    let { email, password } = req.body;

    let query = `INSERT INTO users (email, password) VALUES ("${email}","${password}")`;

    ConnectDB()
        .then((client) => {
            QueryDB(client, query)
                .then((results) => {
                    return res.status(200).json({
                        users: results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error);
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    client.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default {
    getAllUsers,
    createUser
};
