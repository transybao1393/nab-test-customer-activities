process.env.NODE_ENV = 'test';
import "babel-polyfill";
import app from '../index';
import supertest from 'supertest';
let request = supertest(app);
import status from 'statuses';
import mongoose from 'mongoose';
import ProductController from '../controllers/ProductController';
// import MockDate from 'mockdate';
// MockDate.set('2020-05-23T16:57:27.251Z');

//- set mock resolve for async, to be sure datetime is not too different
jest.mock(request, () => {
    return {
        baseURL: '/product/range?priceFrom=1&priceTo=100',
        request: jest.fn().mockResolvedValue({
            "data": [
                {
                    "_id": "5ec955f7d7089f5fa0028021",
                    "pName": "Skirt",
                    "pPrice": 123,
                    "pBranch": "Louis Vution",
                    "pColor": "White",
                    "__v": 0,
                    "created_at": "2020-05-23T16:57:27.248Z",
                    "updated_at": "2020-05-23T16:57:27.248Z"
                },
                {
                    "_id": "5ec955f7d7089f5fa0028022",
                    "pName": "T-shirt",
                    "pPrice": 123,
                    "pBranch": "Louis Vution",
                    "pColor": "White",
                    "__v": 0,
                    "created_at": "2020-05-23T16:57:27.251Z",
                    "updated_at": "2020-05-23T16:57:27.251Z"
                }
            ]
        })
    };
});

describe('Product Price Range Test', () => {
    it('Test if filterPriceRange is called', async() => {
        const filterPriceRange = jest.spyOn(ProductController, 'filterPriceRange');
        expect(filterPriceRange).toHaveBeenCalledTimes(0);
    });

    it('If price between 1 and 100', async (done) => {
        const response = await request.get('/product/range?priceFrom=1&priceTo=100');
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.message).toEqual(status.message[200]);
        expect(response.body.data).toEqual([]);
        done();
    });

    it('If price between 100 and 1000', async (done) => {
        let expectedResponse = [
            {
                "_id": "5ec955f7d7089f5fa0028021",
                "pName": "Skirt",
                "pPrice": 123,
                "pBranch": "Louis Vution",
                "pColor": "White",
                "__v": 0,
                "created_at": "2020-05-23T16:57:27.248Z",
                "updated_at": "2020-05-23T16:57:27.248Z"
            },
            {
                "_id": "5ec955f7d7089f5fa0028022",
                "pName": "T-shirt",
                "pPrice": 123,
                "pBranch": "Louis Vution",
                "pColor": "White",
                "__v": 0,
                "created_at": "2020-05-23T16:57:27.251Z",
                "updated_at": "2020-05-23T16:57:27.251Z"
            }
        ];
        const response = await request.get('/product/range?priceFrom=100&priceTo=1000');
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.message).toEqual(status.message[200]);
        expect(response.body.data).toContainEqual(
            expect.objectContaining({
                pName: "Skirt",
                pPrice: expect.any(Number)
            })
        );
        expect(response.body.data).toEqual(expectedResponse);
        done();
    });

    it('If value of price from is a string', async (done) => {
        const response = await request.get('/product/range?priceFrom=qwe&priceTo=100');
        expect(response.status).toBe(400);
        expect(response.body.error).toBeTruthy();
        expect(response.body.message).toEqual(status.message[400]);
        expect(response.body.data).toEqual(null);
        done();
    });

    it('If value of price from is empty', async (done) => {
        const response = await request.get('/product/range?priceFrom=&priceTo=');
        expect(response.status).toBe(400);
        expect(response.body.error).toBeTruthy();
        expect(response.body.message).toEqual(status.message[400]);
        expect(response.body.data).toEqual(null);
        done();
    });

    it('Wrong URI', async (done) => {
        //- in case of wrong uri
        const response = await request.get('/product/range1');
        expect(response.status).toBe(404);
        done();
    });
});

beforeAll(done => {
    done();
});

afterAll(done => {
    mongoose.connection.close();
    return done();
});