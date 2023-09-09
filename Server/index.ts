import express, {Response, Request} from 'express';

import server from './src/app';

const app = express();
const port = process.env.PORT || 3001;

// Rutas y middleware
// server.use('/match',router)

// (req: Request, res: Response) => {
//     res.send('¡Hola, mundo!');
//   });

// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
