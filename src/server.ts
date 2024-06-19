import http from 'http';
import express from 'express';

import './config/logging';

import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFoundHandler } from './middleware/routeNotFoundHandler';

import { SERVER_HOSTNAME, SERVER_PORT } from './config/config';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

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

    application.get('/main/health-check', (req, res, next) => {
        return res.status(200).json({ msg: 'I am listening ...' });
    });

    logging.info('---------------------------------');
    logging.info('---- Defining Error Routing -----');
    logging.info('---------------------------------');

    application.use(routeNotFoundHandler);

    logging.info('---------------------------------');
    logging.info('------ Starting the Server ------');
    logging.info('---------------------------------');

    httpServer = http.createServer(application);
    httpServer.listen(SERVER_PORT, () => {
        logging.info('---------------------------------');
        logging.info('Server Started: ' + SERVER_HOSTNAME + ':' + SERVER_PORT);
        logging.info('---------------------------------');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
