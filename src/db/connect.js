'use strict';
import mongoose from 'mongoose';
import config from '../config.json';
import ProductModel from '../model/Product';
import {size} from 'lodash';

let connectionString = config.MONGO_CONNECTION_STRING;
let options = {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: false,
    useCreateIndex: true,
    useFindAndModify: false
};
class Connection {

    // connect() {
    //     //- connect to database
    //     mongoose.connect(connectionString, options);

    //     //- error catch event
    //     mongoose.connection.on('connected', () => {
    //         console.info('Database connected');
    //     });
    //     mongoose.connection.on('error', () => {
    //         console.info('Database error !!!');
    //     });
    //     mongoose.connection.on('disconnected', () => {
    //         console.info('Database disconnected...');
    //     });
    // }

    connectAndGenerateMockData() {
        //- connect to database
        // mongoose.connect(connectionString, options);

        //- error catch event
        // mongoose.connection.on('connected', () => {
        //     console.info('Database connected');

        //     //- check if it has data
        //     ProductModel.find().limit(1).exec(async function(err, product) {
        //         // console.log('product size...', size(product));
        //         if(!err && size(product) == 0) {
        //             //- generate mock data
        //             await ProductModel.insertMany({
        //                 pName: "Skirt",
        //                 pPrice: 123,
        //                 pBranch: "Louis Vution",
        //                 pColor: "White"
        //             });
        //             await ProductModel.insertMany({
        //                 pName: "T-shirt",
        //                 pPrice: 123,
        //                 pBranch: "Louis Vution",
        //                 pColor: "White"
        //             });
        //             await ProductModel.insertMany({
        //                 pName: "T-shirt 2",
        //                 pPrice: 1234,
        //                 pBranch: "Louis Vution",
        //                 pColor: "Yellow"
        //             });
        //             await ProductModel.insertMany({
        //                 pName: "T-shirt 2",
        //                 pPrice: 56666,
        //                 pBranch: "Louis Vution",
        //                 pColor: "Yellow"
        //             });
        //             await ProductModel.insertMany({
        //                 pName: "T-shirt 2",
        //                 pPrice: 55555,
        //                 pBranch: "Louis Vution",
        //                 pColor: "Pink"
        //             });
        //             await ProductModel.insertMany({
        //                 pName: "T-shirt 3",
        //                 pPrice: 77777,
        //                 pBranch: "Louis Vution",
        //                 pColor: "Pink"
        //             });
        //             console.info('Generated mocking data...');
        //         }
        //     });


        // });

        // mongoose.connection.on('error', () => {
        //     console.info('Database error !!!');
        // });
        // mongoose.connection.on('disconnected', () => {
        //     console.info('Database disconnected...');
        //     process.exit(1);
        // });

        mongoose.connect(connectionString, options)
        .then(() => {
            console.info('Database connected');

            //- check if it has data
            // ProductModel.find().limit(1).exec(async function(err, product) {
            //     // console.log('product size...', size(product));
            //     if(!err && size(product) == 0) {
            //         //- generate mock data
            //         await ProductModel.insertMany({
            //             pName: "Skirt",
            //             pPrice: 123,
            //             pBranch: "Louis Vution",
            //             pColor: "White"
            //         });
            //         await ProductModel.insertMany({
            //             pName: "T-shirt",
            //             pPrice: 123,
            //             pBranch: "Louis Vution",
            //             pColor: "White"
            //         });
            //         await ProductModel.insertMany({
            //             pName: "T-shirt 2",
            //             pPrice: 1234,
            //             pBranch: "Louis Vution",
            //             pColor: "Yellow"
            //         });
            //         await ProductModel.insertMany({
            //             pName: "T-shirt 2",
            //             pPrice: 56666,
            //             pBranch: "Louis Vution",
            //             pColor: "Yellow"
            //         });
            //         await ProductModel.insertMany({
            //             pName: "T-shirt 2",
            //             pPrice: 55555,
            //             pBranch: "Louis Vution",
            //             pColor: "Pink"
            //         });
            //         await ProductModel.insertMany({
            //             pName: "T-shirt 3",
            //             pPrice: 77777,
            //             pBranch: "Louis Vution",
            //             pColor: "Pink"
            //         });
            //         console.info('Generated mocking data...');
            //     }
            // });
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
