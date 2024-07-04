import http from 'http';
import express from 'express';

import './config/logging';

import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFoundHandler } from './middleware/routeNotFoundHandler';
import { httpExceptionHandler } from './middleware/globalErrorHandler';

import routes from './routes';
import { configurationFactory } from './config/config';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    logging.info('---------------------------------');
    logging.info('----- Initializing the API ------');
    logging.info('---------------------------------');

    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());
    application.use(corsHandler);

    logging.info('---------------------------------');
    logging.info('---- Logging & Configuration ----');
    logging.info('---------------------------------');

    application.use(loggingHandler);

    logging.info('---------------------------------');
    logging.info('-- Defining Controller Routing --');
    logging.info('---------------------------------');

    application.use('/', routes());

    logging.info('---------------------------------');
    logging.info('---- Defining Error Routing -----');
    logging.info('---------------------------------');

    application.use(routeNotFoundHandler);
    application.use(httpExceptionHandler);

    logging.info('---------------------------------');
    logging.info('------ Starting the Server ------');
    logging.info('---------------------------------');

    const { server } = configurationFactory();
    const { host, port } = server;

    httpServer = http.createServer(application);
    httpServer.listen(port, () => {
        logging.info('-------------------------------------');
        logging.info('Server Started: ' + host + ':' + port);
        logging.info('-------------------------------------');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
