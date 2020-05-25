process.env.NODE_ENV = 'test';
import "babel-polyfill";
import app from '../index';
import supertest from 'supertest';
let request = supertest(app);
import status from 'statuses';
import mongoose from 'mongoose';

describe('Product search test', () => {

    it('Show all product', async (done) => {
        const response = await request.get('/product');
        expect(response.status).toBe(200);
        expect(response.body.error).toBeFalsy();
        expect(response.body.message).toEqual(status.message[200]);
        expect(response.body.data).toContainEqual(
            expect.objectContaining({
                pName: "Skirt",
                pPrice: expect.any(Number)
            })
        );
        expect(response.body.data).toContainEqual(
            expect.objectContaining({
                pName: "T-shirt",
                pPrice: expect.any(Number)
            })
        );
        expect(response.body.data).toHaveLength(6);
        done();
    });

    it('Wrong URI', async (done) => {
        //- incase of wrong uri
        const response = await request.get('/product1');
        expect(response.status).toBe(404);
        done();
    });


});

beforeAll(done => {
    done();
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    return done();
});