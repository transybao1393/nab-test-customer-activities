import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import CORS from 'cors';

import bodyParser from 'body-parser';
import helmet from 'helmet';
import Connection from './db/connect';
import customerActivitiesRouter from './router/customerActivities';

try {
    Connection.connectAndGenerateMockData();
} catch (error) {
    console.log('mongoose error', error);
}
const app = express();

//- using morgan
app.use(morgan(':status [:method] :url - :response-time ms'));

//- body-parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//- using compression
app.use(compression());

//- using CORS for all request
app.use(CORS());

//- using helmet
app.use(helmet());

//- customer activities router
app.use('/activities', customerActivitiesRouter);

export default app;
