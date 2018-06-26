import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import CORS from 'cors';
import fs from 'fs';
import config from './config.json';
import http from 'http';
import https from 'https';
const app = express();
const httpServer = http.createServer(app);

//- using morgan
app.use(morgan(':status [:method] :url - :response-time ms'))

//- using compression
app.use(compression())

//- using CORS for all request
app.use(CORS())

//- create https server
const options = 
{
    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

//- routes
app.get('/:id', (req, res) => {
    let param = req.params['id'];
    res.json({status: 200, message: param})
})

//- open a server
app.listen(process.env.PORT || config.port, () => {
    console.log('Server start at port: ' + (process.env.PORT || config.port));
})
