import moment from 'moment';
import _ from 'lodash';
// import * as services from '../services';
import {
    ProductModel,
    CustomerActivitiesModel
} from '../model';

class MUserBehavior
{
    async checkEmailExist(req, res, next)
    {
        let email = req.body.eEmail;
        try {
            let count = await model.Employee.countDocuments({
                eEmail: email
            });
            console.log('count', count);
            if(count === 0) //- exist
            {   
                //- email not exist
                res.status(404).json({
                    error: true,
                    message: "This email is not exist. Please try again",
                    data: null
                });
            }else{
                //- email already exist
                next();
            }
        } catch (error) {
            res.status(500).json({
                message: "Error",
                data: error
            });
        }
        
    }

    async saveUserAction(req, res, next) 
    {
        try {
        
            //- save user behaviour
            
            
        } catch (error) {
            res.status(500).json({
                message: "Error",
                data: error
            });
        }
    }

}

export default new MUserBehavior();
