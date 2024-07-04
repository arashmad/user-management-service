import { Router } from 'express';

import controller from '../controllers/auth.controller';

export default (router: Router) => {
    router.post('/auth/login', controller.loginController);
    router.post('/auth/register', controller.registerController);
    router.get('/auth-validate', controller.validateTokenController);
};
