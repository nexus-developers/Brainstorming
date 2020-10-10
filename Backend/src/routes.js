import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PostController from './app/controllers/PostController';
import CommentController from './app/controllers/CommentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/post', authMiddleware, PostController.store);
routes.post('/comment', authMiddleware, CommentController.store);
routes.get('/comment', authMiddleware, CommentController.index);
routes.put('/users', authMiddleware ,UserController.update);
routes.get('/users', authMiddleware, UserController.index);
routes.get('/post', authMiddleware, PostController.index);
routes.get('/post/:id', authMiddleware, PostController.findOne);
routes.get('/post-findAll', PostController.findAll);
routes.put('/post/:id', authMiddleware, PostController.update);


export default routes;