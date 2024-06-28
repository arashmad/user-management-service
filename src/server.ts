import http from 'http';
import express from 'express';

import './config/logging';

import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFoundHandler } from './middleware/routeNotFoundHandler';

import routes from './routes';
import { configurationFactory } from './config/config';
import dataSourceFactory from './database';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

const { scope, server, db } = configurationFactory();

export const Main = () => {
    logging.info('---------------------------------');
    logging.info('----- Initializing the API ------');
    logging.info('---------------------------------');

    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.info('---------------------------------');
    logging.info('---- Logging & Configuration ----');
    logging.info('---------------------------------');

    application.use(loggingHandler);
    application.use(corsHandler);

    logging.info('---------------------------------');
    logging.info('-- Defining Controller Routing --');
    logging.info('---------------------------------');

    application.use('/', routes());

    logging.info('---------------------------------');
    logging.info('---- Defining Error Routing -----');
    logging.info('---------------------------------');

    application.use(routeNotFoundHandler);

    logging.info('---------------------------------');
    logging.info('------ Starting the Server ------');
    logging.info('---------------------------------');

    httpServer = http.createServer(application);

    const { host, port } = server;

    if (scope === 'test') {
        httpServer.listen(port, () => {
            logging.info('---------------------------------');
            logging.info('Server Started: ' + host + ':' + port);
            logging.info('---------------------------------');
        });
    } else {
        dataSourceFactory.initialize().then(() => {
            httpServer.listen(port, () => {
                logging.info('---------------------------------');
                logging.info('Server Started: ' + host + ':' + port);
                logging.info('Connected to the database successfully.');
                logging.info('---------------------------------');
            });
        });
    }
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
