//Archivo de configuracion de la aplicacion

//Importando librerias:
// const path = require('path');
import 'dotenv/config.js'
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//Funcion de conexion a la Base de Datos:
import dbConnect from './db/dbConnection.js';

import router from './routes/task.routes.js'
//Inicializaciones:
const app = express(); //Inicializacion de la libreria express
dbConnect(); //Se inicializa la conexion a la Base de Datos

//Configuracion del puerto:
const port = process.env.PORT;

//Middlewares:
app.use(cors()); //Habilita cors para  poder acceder a recursos de un servidor desde distintos dominios u origenes
app.use(morgan('dev')); //Muestra en la consola el estado de las solicitudes
app.use(express.json()); // Para que el servidor comprenda archivos con formato json

//Importacion de rutas:
app.use(router);

//Configuracion de puerto de escucha del servidor:
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));
