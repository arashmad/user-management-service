import dotenv from 'dotenv';

import { IApplicationConfiguration } from '../interface/connection.interface';

dotenv.config();

export const configurationFactory = (): IApplicationConfiguration => {
    const scope = process.env.NODE_ENV || 'development';
    switch (scope) {
        case 'test':
            if (
                !process.env.PG_TEST_HOST ||
                !process.env.PG_TEST_PORT ||
                !process.env.PG_TEST_DB_NAME ||
                !process.env.PG_TEST_USER ||
                !process.env.PG_TEST_PASSWORD ||
                !process.env.SERVER_TEST_HOSTNAME ||
                !process.env.SERVER_TEST_PORT
            ) {
                throw Error('Missing configuration setting. Check .env file.');
            }
            return {
                db: {
                    host: process.env.PG_TEST_HOST,
                    port: Number(process.env.PG_TEST_PORT),
                    database: process.env.PG_TEST_DB_NAME,
                    user: process.env.PG_TEST_USER,
                    password: process.env.PG_TEST_PASSWORD
                },
                server: {
                    host: process.env.SERVER_TEST_HOSTNAME,
                    port: Number(process.env.SERVER_TEST_PORT)
                },
                tokenConfig: {
                    secret: 'hahahaha',
                    expireIn: '1h'
                }
            };

        case 'development':
        default:
            if (
                !process.env.PG_DEV_HOST ||
                !process.env.PG_DEV_PORT ||
                !process.env.PG_DEV_DB_NAME ||
                !process.env.PG_DEV_USER ||
                !process.env.PG_DEV_PASSWORD ||
                !process.env.SERVER_DEV_HOSTNAME ||
                !process.env.SERVER_DEV_PORT
            )
                throw Error('Missing configuration setting. Check .env file.');
            return {
                db: {
                    host: process.env.PG_DEV_HOST,
                    port: Number(process.env.PG_DEV_PORT),
                    database: process.env.PG_DEV_DB_NAME,
                    user: process.env.PG_DEV_USER,
                    password: process.env.PG_DEV_PASSWORD
                },
                server: {
                    host: process.env.SERVER_DEV_HOSTNAME,
                    port: Number(process.env.SERVER_DEV_PORT)
                },
                tokenConfig: {
                    secret: 'hahahaha',
                    expireIn: '1h'
                }
            };

        case 'production':
            if (
                !process.env.PG_PROD_HOST ||
                !process.env.PG_PROD_PORT ||
                !process.env.PG_PROD_DB_NAME ||
                !process.env.PG_PROD_USER ||
                !process.env.PG_PROD_PASSWORD ||
                !process.env.SERVER_PROD_HOSTNAME ||
                !process.env.SERVER_PROD_PORT
            )
                throw Error('Missing configuration setting. Check .env file.');
            return {
                db: {
                    host: process.env.PG_PROD_HOST,
                    port: Number(process.env.PG_PROD_PORT),
                    database: process.env.PG_PROD_DB_NAME,
                    user: process.env.PG_PROD_USER,
                    password: process.env.PG_PROD_PASSWORD
                },
                server: {
                    host: process.env.SERVER_PROD_HOSTNAME,
                    port: Number(process.env.SERVER_PROD_PORT)
                },
                tokenConfig: {
                    secret: 'hahahaha',
                    expireIn: '1h'
                }
            };
    }
};

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';
