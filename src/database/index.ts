import { Pool, PoolClient } from 'pg';

import { configurationFactory } from '../config/config';
const { db } = configurationFactory();

/**
 * Asynchronously returns `PoolClient` object for executing SQL queries.
 * @returns {Promise<PoolClient>} PoolClient object in Promise format
 * @example
 * const connection = await ConnectDB();
 * const result = await connection.query<IOutput>('SELECT ... ;');
 */
const ConnectDB = async (): Promise<PoolClient> => {
    try {
        const pool = new Pool(db);
        return await pool.connect();
    } catch (error) {
        throw error;
    }
};

// /**
//  * Asynchronously executes a query.
//  * @param {PoolClient} connection Connection object
//  * @param {string|IQuery} query Query
//  * @returns {Promise<PoolClient>} PoolClient object in Promise format
//  * @example
//  * const conn = await ConnectDB();
//  * const result = await RunQuery<IOutput>(conn, query)('SELECT ... ;');
//  */
// const RunQuery = async (connection: PoolClient, query: string | IQuery): Promise<QueryResult<any>> => {
//     try {
//         const result = await connection.query(query);
//         connection.release();
//         return result;
//     } catch (error) {
//         connection.release();
//         throw error;
//     }
// };

export { ConnectDB };
