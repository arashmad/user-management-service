import { Client } from 'pg';

import config from './config';

const param = config.database;

const ConnectDB = async () =>
    new Promise<Client>((resolve, reject) => {
        const connection = new Client(param);
        connection.connect((error: Error) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(connection);
        });
    });

const QueryDB = async (client: Client, query: string) =>
    new Promise((resolve, reject) => {
        client.query(query, (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });

export { ConnectDB, QueryDB };
