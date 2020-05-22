'use strict'
import mongoose from 'mongoose';
import config from '../config.json';
import ProductModel from '../model/Product';

class Connection {
    connect()
    {
        // let connectionString = 'mongodb://localhost:27017/qrCode';
        let connectionString = 'mongodb://' + config.MONGO_HOST + '/' + config.MONGO_DOCUMENT;
        let options = {
            useNewUrlParser: true,
            autoIndex: true,
            autoReconnect: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        // mongoose.set('useCreateIndex', true);
        //- connect to database
        mongoose.connect(connectionString, options);
        
        //- error catch event
        mongoose.connection.on('connected', () => {
            console.info('Database connected');
        });
        mongoose.connection.on('error', () => {
            console.info('Database error !!!');
        });
        mongoose.connection.on('disconnected', () => {
            console.info('Database disconnected...');
        });
    }

    connectAndGenerateMockData()
    {
        // let connectionString = 'mongodb://localhost:27017/qrCode';
        let connectionString = 'mongodb://' + config.MONGO_HOST + '/' + config.MONGO_DOCUMENT;
        let options = {
            useNewUrlParser: true,
            autoIndex: true,
            autoReconnect: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        // mongoose.set('useCreateIndex', true);
        //- connect to database
        mongoose.connect(connectionString, options);
        
        //- error catch event
        mongoose.connection.on('connected', () => {
            console.info('Database connected');
            //- generate mock data
            // ProductModel.insertMany({
            //     pName: "T-shirt 2",
            //     pPrice: 56666,
            //     pBranch: "Louis Vution",
            //     pColor: "Yellow"
            // });
            // ProductModel.insertMany({
            //     pName: "T-shirt 3",
            //     pPrice: 77777,
            //     pBranch: "Louis Vution",
            //     pColor: "Pink"
            // });
            console.info('Generated mocking data. Ready to test...');
        });
        mongoose.connection.on('error', () => {
            console.info('Database error !!!');
        });
        mongoose.connection.on('disconnected', () => {
            console.info('Database disconnected...');
        });
    }
}



export default new Connection();
