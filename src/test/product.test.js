//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
import "babel-polyfill";
import app from '../index';
import supertest from 'supertest';
let request = supertest(app);
import status from 'statuses';

describe('Product search test', () => {
    it('Show all product', async done => {
        // Sends GET Request to /test endpoint
        let expectedResponse = {
            "error": false,
            "message": "OK",
            "data": [
                {
                    "_id": "5ec65c8877b20a2113d64aad",
                    "pName": "Skirt",
                    "pPrice": 123,
                    "pBranch": "Louis Vuition",
                    "pColor": "White",
                    "__v": 0
                },
                {
                    "_id": "5ec65cc00fa940212c11b37c",
                    "pName": "T-shirt",
                    "pPrice": 123,
                    "pBranch": "Louis Vuition",
                    "pColor": "White",
                    "__v": 0
                },
                {
                    "_id": "5ec698a162b3f5249aacd08e",
                    "pName": "T-shirt 3",
                    "pPrice": 55555,
                    "pBranch": "Louis Vution",
                    "pColor": "Pink",
                    "pCreatedDate": "2020-05-21T15:05:05.777Z",
                    "__v": 0,
                    "created_at": "2020-05-21T15:05:05.793Z",
                    "updated_at": "2020-05-21T15:05:05.793Z"
                },
                {
                    "_id": "5ec698a162b3f5249aacd08d",
                    "pName": "T-shirt 2",
                    "pPrice": 1234,
                    "pBranch": "Louis Vution",
                    "pColor": "Yellow",
                    "pCreatedDate": "2020-05-21T15:05:05.775Z",
                    "__v": 0,
                    "created_at": "2020-05-21T15:05:05.787Z",
                    "updated_at": "2020-05-21T15:05:05.787Z"
                },
                {
                    "_id": "5ec698f6fc160524a56a4fbb",
                    "pName": "T-shirt 2",
                    "pPrice": 56666,
                    "pBranch": "Louis Vution",
                    "pColor": "Yellow",
                    "pCreatedDate": "2020-05-21T15:06:30.360Z",
                    "__v": 0,
                    "created_at": "2020-05-21T15:06:30.371Z",
                    "updated_at": "2020-05-21T15:06:30.371Z"
                },
                {
                    "_id": "5ec698f6fc160524a56a4fbc",
                    "pName": "T-shirt 3",
                    "pPrice": 77777,
                    "pBranch": "Louis Vution",
                    "pColor": "Pink",
                    "pCreatedDate": "2020-05-21T15:06:30.363Z",
                    "__v": 0,
                    "created_at": "2020-05-21T15:06:30.377Z",
                    "updated_at": "2020-05-21T15:06:30.377Z"
                }
            ]
        };
        const response = await request.get('/product')
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.message).toEqual(status.message[200]);
        expect(response.body).toEqual(expectedResponse);
        done()
    });

    it('Wrong URI', async done => {
        //- incase of wrong uri
        const response = await request.get('/product1')
        expect(response.status).toBe(404);
        done()
    });


});