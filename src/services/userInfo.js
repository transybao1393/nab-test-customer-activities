import parser from 'ua-parser-js';
import {
    CustomerActivitiesModel
} from '../model/index';

//- tracking activities
let trackingActivities = async (data) => {
    //- insert to table CustomerActivities
    await CustomerActivitiesModel.create(data);
};

export {
    trackingActivities
};
