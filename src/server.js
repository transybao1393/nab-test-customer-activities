import app from './index';
import config from './config.json';
import {
    consumeMessage
} from '../src/services/rabbitmq';

app.listen(process.env.PORT || config.port, () => {
    console.log('[*] Server start at port: ' + (process.env.PORT || config.port));
    consumeMessage();
});