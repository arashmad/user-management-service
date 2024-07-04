/**
 * PostgreSQL database connection interface
 * @param {string} host Database host
 * @param {number} port Database port
 * @param {string} database Database name
 * @param {string} user Database root username for establishing the connection
 * @param {string} password Database root password for establishing the connection
 *
 */
interface IDBConnection {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
}

/**
 * Express server connection interface
 * @param {string} host Express application host
 * @param {number} port Express application port
 */
interface IServerConfiguration {
    host: string;
    port: number;
}

/**
 * JWT required configuration interface
 * @param {string} secret Text for encrypting/decrypting the jwt token
 * @param {string} expireIn Token expires after this amount of time in hours
 */
interface IJwtTokenConfiguration {
    secret: string;
    expireIn: string; //'1h' | '2h' | '6h' | '12h' | '24h'
}

/**
 * Application configuration interface
 * @param {IDBConnection} db Database connection configuration
 * @param {IServerConfiguration} server Express application server configuration
 * @param {IJwtTokenConfiguration} tokenConfig JWT required configuration
 */
export interface IApplicationConfiguration {
    server: IServerConfiguration;
    db: IDBConnection;
    tokenConfig: IJwtTokenConfiguration;
}
