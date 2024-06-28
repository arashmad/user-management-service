import dotenv from 'dotenv';

dotenv.config();

/**
 * Database connection configuration
 * @param {string} type Database type, only `postgres` is supported
 * @param {string} host Database host, default is localhost
 * @param {number} port Database port, default is 5432
 * @param {string} database Database name
 * @param {string} username Database root username for establishing the connection
 * @param {string} password Database root password for establishing the connection
 *
 */
interface IDatabaseConfiguration {
    type: 'postgres';
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
}

/**
 * Application Configuration Interface
 * @param {string} host Express application host, default is localhost
 * @param {number} port Express application port, default is 3302
 */
interface IServerConfiguration {
    host: string;
    port: number;
}

/**
 * Application Configuration Interface
 * @param {IDatabaseConfiguration} db Database connection configuration
 * @param {IServerConfiguration} server Express application server configuration
 * @param {string} scope Scope of the application could be one of `test`, `development` and `production`
 */
interface IConfiguration {
    db: IDatabaseConfiguration;
    server: IServerConfiguration;
    scope: string;
}

export const configurationFactory = (): IConfiguration => {
    const scope = process.env.NODE_ENV || 'development';
    switch (scope) {
        case 'test':
            Object.keys(process.env).map((name) => {
                if (name.indexOf('_TEST_') >= 0) console.log(name, ':', process.env[name]);
            });
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
                    type: 'postgres',
                    host: process.env.PG_TEST_HOST,
                    port: Number(process.env.PG_TEST_PORT),
                    database: process.env.PG_TEST_DB_NAME,
                    username: process.env.PG_TEST_USER,
                    password: process.env.PG_TEST_PASSWORD
                },
                server: {
                    host: process.env.SERVER_TEST_HOSTNAME,
                    port: Number(process.env.SERVER_TEST_PORT)
                },
                scope
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
                    type: 'postgres',
                    host: process.env.PG_DEV_HOST,
                    port: Number(process.env.PG_DEV_PORT),
                    database: process.env.PG_DEV_DB_NAME,
                    username: process.env.PG_DEV_USER,
                    password: process.env.PG_DEV_PASSWORD
                },
                server: {
                    host: process.env.SERVER_DEV_HOSTNAME,
                    port: Number(process.env.SERVER_DEV_PORT)
                },
                scope
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
                    type: 'postgres',
                    host: process.env.PG_PROD_HOST,
                    port: Number(process.env.PG_PROD_PORT),
                    database: process.env.PG_PROD_DB_NAME,
                    username: process.env.PG_PROD_USER,
                    password: process.env.PG_PROD_PASSWORD
                },
                server: {
                    host: process.env.SERVER_PROD_HOSTNAME,
                    port: Number(process.env.SERVER_PROD_PORT)
                },
                scope
            };
    }
};

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';
