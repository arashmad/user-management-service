import { Router } from 'express';

import healthCheck from './healthCheck';
import user from './user';

const router = Router();

export default (): Router => {
    healthCheck(router);
    user(router);
    return router;
};
