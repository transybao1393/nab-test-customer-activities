//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
import "babel-polyfill";
import app from '../index';
import supertest from 'supertest';
let request = supertest(app);
import status from 'statuses';

//Require the dev-dependencies

describe('Product Price Range Test', () => {
    
    it('If price between 1 and 100', async done => {
        // Sends GET Request to /test endpoint
        const response = await request.get('/product/range?priceFrom=1&priceTo=100')
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.message).toEqual(status.message[200]);
        expect(response.body.data).toEqual([]);
        done()
    });

    it('If price between 100 and 1000', async done => {
        // Sends GET Request to /test endpoint
        let expectedResponse = [
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
            }
        ];
        const response = await request.get('/product/range?priceFrom=100&priceTo=1000')
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.message).toEqual(status.message[200]);
        expect(response.body.data).toEqual(expectedResponse);
        done()
    });

    it('If value of price from is a string', async done => {
        // Sends GET Request to /test endpoint
        const response = await request.get('/product/range?priceFrom=qwe&priceTo=100')
        expect(response.status).toBe(400);
        expect(response.body.error).toBeTruthy();
        expect(response.body.message).toEqual(status.message[400]);
        expect(response.body.data).toEqual(null);
        done()
    });

    it('If value of price from is empty', async done => {
        // Sends GET Request to /test endpoint
        const response = await request.get('/product/range?priceFrom=&priceTo=')
        expect(response.status).toBe(400);
        expect(response.body.error).toBeTruthy();
        expect(response.body.message).toEqual(status.message[400]);
        expect(response.body.data).toEqual(null);
        done()
    });

    it('Wrong URI', async done => {
        //- incase of wrong uri
        const response = await request.get('/product/range1')
        expect(response.status).toBe(404);
        done()
    });


});