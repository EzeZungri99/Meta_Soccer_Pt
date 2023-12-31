import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import routes from './routes/index';

const server = express();




server.use(morgan('dev'));

server.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
  });
  
  server.use('/', routes);
  
//   server.use((err: any, req: Request, res: Response, next: NextFunction) => {
//     const status = err.status || 500;
//     const message = err.message || err;
//     console.error(err);
//     res.status(status).send(message);
//   });

export default server;
