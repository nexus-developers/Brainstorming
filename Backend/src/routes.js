import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PostController from './app/controllers/PostController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/post', authMiddleware, PostController.store);
routes.put('/users', authMiddleware ,UserController.update);
routes.get('/users', authMiddleware, UserController.index);

export default routes;