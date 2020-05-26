import { Router } from 'express';
import MovieController from './app/controllers/MovieController';

const routes = Router();

routes.get('/filmes/:word', MovieController.sortMovie);

export default routes;
