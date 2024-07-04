import { Router } from 'express';

import controller from '../controllers/ping.controller';

export default (router: Router) => {
    router.get('/ping', controller.pingController);
};
