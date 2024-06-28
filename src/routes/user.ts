import { Router } from 'express';

import UserControllers from '../controllers/user';

export default (router: Router) => {
    router.post('/user', UserControllers.createUserController);
};
