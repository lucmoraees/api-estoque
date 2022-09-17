import "reflect-metadata";
import express from 'express';
import http from 'http';
import cors from 'cors';
import { errors } from 'celebrate';
import './database';
import routes from './routes';

const app = express();

const server = new http.Server(app);

app.use(express.json());
app.use(cors())
app.use(routes);
app.use(errors());

export default server;
