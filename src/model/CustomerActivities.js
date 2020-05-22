import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let CustomerActivitiesSchema = new Schema({
    
   caBrowser: {type: String, required: true},
   caRemoteAddress: {type:String},
   caType: {type: String, enum: ['c', 'r', 'u', 'd']},

}, { 
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 
})

const CustomerActivities = mongoose.model('CustomerActivities', CustomerActivitiesSchema)
export default CustomerActivities;
