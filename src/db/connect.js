'use strict'
import mongoose from 'mongoose';

let connectionString = 'mongodb://localhost:27017/chat';
    
let options = {
    useNewUrlParser: true,
    autoIndex: true
}
export default mongoose.connect(connectionString, options)
