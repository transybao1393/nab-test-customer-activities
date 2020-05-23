'use strict'
import mongoose from 'mongoose';
import config from '../config.json';
import ProductModel from '../model/Product';
import CustomActivitiesModel from '../model/CustomerActivities';
import {size} from 'lodash';

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
        let connectionString = config.MONGO_CONNECTION_STRING;
        let options = {
            useNewUrlParser: true,
            autoIndex: true,
            autoReconnect: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        }

        //- connect to database
        mongoose.connect(connectionString, options);
        
        //- error catch event
        mongoose.connection.on('connected', () => {
            console.info('Database connected');

            //- check if it has data 
            //- TODO: we can move to background queue
            //- it will request every time even when the query costs very little performance
            ProductModel.find().limit(1).exec(function(err, product) {
                console.log('product size...', size(product));
                if(!err && size(product) == 0) {
                    //- generate mock data
                    ProductModel.insertMany({
                        pName: "Skirt",
                        pPrice: 123,
                        pBranch: "Louis Vution",
                        pColor: "White"
                    });
                    ProductModel.insertMany({
                        pName: "T-shirt",
                        pPrice: 123,
                        pBranch: "Louis Vution",
                        pColor: "White"
                    });
                    ProductModel.insertMany({
                        pName: "T-shirt 2",
                        pPrice: 1234,
                        pBranch: "Louis Vution",
                        pColor: "Yellow"
                    });
                    ProductModel.insertMany({
                        pName: "T-shirt 2",
                        pPrice: 56666,
                        pBranch: "Louis Vution",
                        pColor: "Yellow"
                    });
                    ProductModel.insertMany({
                        pName: "T-shirt 2",
                        pPrice: 55555,
                        pBranch: "Louis Vution",
                        pColor: "Pink"
                    });
                    ProductModel.insertMany({
                        pName: "T-shirt 3",
                        pPrice: 77777,
                        pBranch: "Louis Vution",
                        pColor: "Pink"
                    });
                    console.info('Generated mocking data...');
                }
            });

            
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
