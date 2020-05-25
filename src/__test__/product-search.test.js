process.env.NODE_ENV = 'test';
import "babel-polyfill";
import app from '../index';
import supertest from 'supertest';
let request = supertest(app);
import mongoose from 'mongoose';

describe('Product Search Test', () => {

    it('Search value is null', async () => {
        let testData = '';
        //- incase of wrong uri
        const response = await request.get('/product/any?searchValue=' + testData);
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.data).toContainEqual(
            expect.objectContaining({
                pName: "Skirt",
                pPrice: expect.any(Number)
            })
        );
        expect(response.body.data).toHaveLength(6);
    });

    it('Search value is a number', async () => {
        let testData = 123;
        let expectedData = {
            "error": false,
            "message": "OK",
            "data": []
        };
        //- incase of wrong uri
        const response = await request.get('/product/any?searchValue=' + testData);
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body).toEqual(expectedData);
        expect(response.body.data).toHaveLength(0);
    });

    it('Search value is special character', async () => {
        let testData = `"'!@#$%^&*()-_+=`;
        let expectedData = {
            "error": false,
            "message": "OK",
            "data": []
        };
        //- incase of wrong uri
        const response = await request.get('/product/any?searchValue=' + testData);
        expect(response.status).toBe(200);
        expect(response.error).toBeFalsy();
        expect(response.body).toEqual(expectedData);
        expect(response.body.data).toHaveLength(0);
    });

    it('Wrong URI', async () => {
        //- incase of wrong uri
        const response = await request.get('/product/any1');
        expect(response.status).toBe(404);
    });
});

beforeAll(done => {
    return done();
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    return done();
});
