import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuth';

import { UserController } from '../controllers';

const UserRouter = Router();

UserRouter.post('/register', UserController.createNewUser);

UserRouter.post('/auth', UserController.authenticateUser);

UserRouter.post('/update-score', ensureAuthenticated, UserController.updateUserScore);

UserRouter.post('/ranking', ensureAuthenticated, UserController.usersRanking);

export default UserRouter;
