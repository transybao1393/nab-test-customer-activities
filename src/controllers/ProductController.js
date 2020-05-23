import {
    pick
} from 'lodash';
import {
    ProductModel
} from '../model/index';
import status from 'statuses';

class ProductController 
{

    async showAllProduct(req, res){
        try {
            let productList = await ProductModel.find();
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
            //- TODO: optimize error handling and response message, duplicate too much
        } catch (error) {
            //- throw error
            console.error(error);
            res.status(500).json({
                error: true,
                message: error.message,
                data: error
            })
        }
    }

    async sortByPrice(req, res) {
        let orderType = req.params.orderType; //- asc, desc, by date, alphabet
        let conditions;
        try {
            if(orderType === 'asc') {
                conditions = {'pPrice': 1};
            }else if(orderType === 'desc') {
                conditions = {'pPrice': -1};
            }else if(orderType === 'byDate') {
                conditions = {'created_at': 1};
            }else if(orderType === 'alphabet') {
                conditions = {'pName': 1};
            }
            let sortedProductList = await ProductModel.find().sort(conditions);
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: sortedProductList || []
            });
        } catch (error) {
            //- throw error
            console.error(error);
            res.status(500).json({
                error: true,
                message: error.message,
                data: error
            })
        }
    }

    async filterPriceRange(req, res) {
        try {
            let priceFrom = req.query.priceFrom;
            let priceTo = req.query.priceTo;

            let productList = await ProductModel.find({
                pPrice: {$gt: priceFrom, $lt: priceTo}
            });
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
        } catch (error) {
            //- throw error
            console.error(error);
            res.status(error.code).json({
                error: true,
                message: error.message,
                data: error
            })
        }
    }

    async searchAny(req, res) {
        //- TODO: search branch with values seperately

        //- search like any name, color, branch
        let searchValue = req.query.searchValue;
        console.log('search value', searchValue);
        let regexObj = { $regex: "^" + searchValue, $options: "m" };
        try {
            let productList = await ProductModel.find(
                {
                    $or: [
                        { 'pName': regexObj},
                        { 'pColor': regexObj},
                        { 'pBranch': regexObj},
                    ]
                });
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
        } catch (error) {
            //- throw error
            console.error(error);
            res.status(500).json({
                error: true,
                message: error.message,
                data: error
            })
        }
    }
}

export default new ProductController();
