import express from 'express';
import {
    ProductController
} from '../controllers/index';
const router = express.Router();

//- show all product
router.get('/', ProductController.showAllProduct);

//- filter product
router.get('/price/:orderType', ProductController.sortByPrice);

//- search like
router.get('/any', ProductController.searchAny);

//- filter price range
router.get('/price/range', ProductController.filterPriceRange);

// //- show employee by partner id
// router.get('/:partnerID', controller.EmployeeController.showEmpByPartnerID);

// //- show employee by email
// router.get('/:email', controller.EmployeeController.showEmployeeByEmail);

// //- update employee information by id
// router.patch('/update/:id', controller.EmployeeController.update);

export default router;