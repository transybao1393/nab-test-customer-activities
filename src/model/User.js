import mongoose from 'mongoose';
import moment from 'moment';

let Schema = mongoose.Schema;
let UserSchema = new Schema({
    
    uName: {type: String, required: false},
    uPhoneNumber: {
        type: Number, 
        required: true, 
        index: true, 
        unique: true,
    },
    uPassword: { type: String, select: false, required: false},
    uCode: {type: Number},
    uVerified: {type: Boolean, default: false},
    uCodeExpire: {type: Date, default: moment(new Date()).add(30, 'm').utcOffset("+0700")},

})

const User = mongoose.model('User', UserSchema)
export default User;
