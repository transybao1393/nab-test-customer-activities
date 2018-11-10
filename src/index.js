import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import CORS from 'cors';
import config from './config.json';
import helmet from 'helmet';
import Connection from './db/connect';
Connection.connect();
const app = express();

//- using morgan
app.use(morgan(':status [:method] :url - :response-time ms'))

//- using compression
app.use(compression())

//- using CORS for all request
app.use(CORS())

//- using helmet
app.use(helmet())

//- open a server
app.listen(process.env.PORT || config.port, () => {
    console.log('Server start at port: ' + (process.env.PORT || config.port));
})
