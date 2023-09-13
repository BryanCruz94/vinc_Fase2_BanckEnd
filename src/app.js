import express from 'express';
const bodyParser = require('body-parser');

import LoginRoute from './routes/login.routes';
import UsuarioRoute from './routes/usuario.routes';
import EncuestaRoute from './routes/encuesta.routes';
import GraficaRoute from './routes/grafica.routes';

const cors = require('cors');
const app = express();

app.use( cors() );

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use('/grafica',GraficaRoute);
//app.use('/graficaGec',GraficaGecRoute);

export default app;

