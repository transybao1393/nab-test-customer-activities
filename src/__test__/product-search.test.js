process.env.NODE_ENV = 'test';
import "babel-polyfill";

// import app from '../index';
// import supertest from 'supertest';

import app from '../index';
import supertest from 'supertest';
let request = supertest(app);


import mongoose from 'mongoose';

describe('Product Search Test', () => {

    it('Wrong URI', async () => {
        //- incase of wrong uri
        const response = await request.get('/product/any1');
        expect(response.status).toBe(404);
        mongoose.connection.close();
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
