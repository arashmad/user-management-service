import { Router } from 'express';

import controller from '../controllers/healthCheck';

export default (router: Router) => {
    router.get('/ping', controller.healthCheck);
};
