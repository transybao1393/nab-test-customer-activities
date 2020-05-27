import express from 'express';
import {
    CustomerActivitiesController
} from '../controllers/index';
const router = express.Router();

//- show all product
router.get('/', CustomerActivitiesController.showAllCustomerActivities);

export default router;