import {
    CustomerActivitiesModel
} from '../model/index';
import status from 'statuses';

class CustomerActivitiesController {

    async showAllCustomerActivities(req, res) {
        try {
            let CustomerActivitiesId = req.query.pId;
            let CustomerActivitiesList = await CustomerActivitiesModel.find({
                _id: CustomerActivitiesId
            });
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: CustomerActivitiesList || []
            });
            //- TODO: optimize error handling and response message, duplicate too much
        } catch (error) {
            //- throw error
            console.error(error);
            res.status(500).json({
                error: true,
                message: error.message,
                data: error
            });
        }
    }
}

export default new CustomerActivitiesController();
