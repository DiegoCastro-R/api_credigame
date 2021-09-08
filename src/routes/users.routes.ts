import { Router } from 'express';

import { UserController } from '../controllers';

const UserRouter = Router();

UserRouter.post('/register', UserController.createNewUser);

UserRouter.post('/auth', UserController.authenticateUser);

export default UserRouter;
