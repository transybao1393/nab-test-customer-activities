'use strict'
import mongoose from 'mongoose';

class Connection {
    async connect()
    {
        let connectionString = 'mongodb://localhost:27017/thuexedap';
        let options = {
            useNewUrlParser: true,
            autoIndex: true,
            autoReconnect: true
        }
        mongoose.set('useCreateIndex', true);
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
}



export default new Connection();
