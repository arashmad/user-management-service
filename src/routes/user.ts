import { Router } from 'express';

import controller from '../controllers/user';

export default (router: Router) => {
    router.get('/users', controller.getAllUsers);
    router.post('/user', controller.createUser);
};
