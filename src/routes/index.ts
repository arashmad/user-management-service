import { Router } from 'express';

import ping from './ping';
import auth from './auth';
// import user from './user';

const router = Router();

export default (): Router => {
    ping(router);
    auth(router);
    // user(router);
    return router;
};
