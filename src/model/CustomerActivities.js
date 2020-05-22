import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let CustomerActivitiesSchema = new Schema({
    caUserAgent: {type: String, required: true},
    caBrowser: {type: Schema.Types.Mixed, default: null},
    caOS: {type: Schema.Types.Mixed, default: null},
    caRemoteAddress: {type:String},
    caMethod: {type: String, enum: ['GET', 'POST', 'PUT', 'OPTIONS']},
    caOriginalUrl: {type: String},
    caParams: {type: Schema.Types.Mixed, default: null},
    caQuery: {type: Schema.Types.Mixed, default: null},
}, { 
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 
})

const CustomerActivities = mongoose.model('CustomerActivities', CustomerActivitiesSchema)
export default CustomerActivities;
