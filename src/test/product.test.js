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
            },
            {
                "_id": "5ec955f7d7089f5fa0028023",
                "pName": "T-shirt 2",
                "pPrice": 1234,
                "pBranch": "Louis Vution",
                "pColor": "Yellow",
                "__v": 0,
                "created_at": "2020-05-23T16:57:27.252Z",
                "updated_at": "2020-05-23T16:57:27.252Z"
            },
            {
                "_id": "5ec955f7d7089f5fa0028024",
                "pName": "T-shirt 2",
                "pPrice": 56666,
                "pBranch": "Louis Vution",
                "pColor": "Yellow",
                "__v": 0,
                "created_at": "2020-05-23T16:57:27.252Z",
                "updated_at": "2020-05-23T16:57:27.252Z"
            },
            {
                "_id": "5ec955f7d7089f5fa0028025",
                "pName": "T-shirt 2",
                "pPrice": 55555,
                "pBranch": "Louis Vution",
                "pColor": "Pink",
                "__v": 0,
                "created_at": "2020-05-23T16:57:27.253Z",
                "updated_at": "2020-05-23T16:57:27.253Z"
            },
            {
                "_id": "5ec955f7d7089f5fa0028026",
                "pName": "T-shirt 3",
                "pPrice": 77777,
                "pBranch": "Louis Vution",
                "pColor": "Pink",
                "__v": 0,
                "created_at": "2020-05-23T16:57:27.253Z",
                "updated_at": "2020-05-23T16:57:27.253Z"
            }
        ];
        
        const response = await request.get('/product')
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.message).toEqual(status.message[200]);
        expect(response.body.data).toEqual(expectedResponse);
        done()
    });

    it('Wrong URI', async done => {
        //- incase of wrong uri
        const response = await request.get('/product1')
        expect(response.status).toBe(404);
        done()
    });


});