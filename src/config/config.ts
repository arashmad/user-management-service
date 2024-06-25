import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

// <!!!----------------- Server Running Configuration -----------------!!!> //
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3300;

export const SERVER = { SERVER_HOSTNAME, SERVER_PORT };

// <!!!------------------- Database Configuration -------------------!!!> //
// Default values for running test not in production mode
const host = process.env.DB_HOST || 'localhost';
const port = Number(process.env.DB_PORT) || 5432;
const database = process.env.DB_NAME || 'db_name';
const user = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASS || 'postgres';

const DATABASE = {
    host,
    port,
    database,
    user,
    password
};

// Export configuration
const config = {
    server: SERVER,
    database: DATABASE
};

export default config;
