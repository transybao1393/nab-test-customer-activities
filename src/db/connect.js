'use strict';
import mongoose from 'mongoose';
import config from '../config.json';

// let connectionString = config.MONGO_CONNECTION_STRING;
// let connectionString = "mongodb://mongo/nab-test";
let connectionString = process.env.MONGODB_URI || config.MONGO_CONNECTION_STRING;
let options = {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: false,
    useCreateIndex: true,
    useFindAndModify: false
};
class Connection {

    connectAndGenerateMockData() {
        mongoose.connect(connectionString, options)
        .then(() => {
            console.info('[*] Database connected');
        }).catch(err => {
            mongoose.connection.close(() => {
                // console.log("Mongoose default connection is disconnected due to application termination");
                console.log('errors...', err);
                process.exit(1);
            });
        });

        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.log("Mongoose default connection is disconnected due to application termination");
                process.exit(1);
            });
        });
    }
}



export default new Connection();
