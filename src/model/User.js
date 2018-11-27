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
    //- foreign key
    // fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]

})

const User = mongoose.model('User', UserSchema)
export default User;
