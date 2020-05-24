process.env.NODE_ENV = 'test';
import "babel-polyfill";

// import app from '../index';
// import supertest from 'supertest';

// const app = require('../index');
import app from '../index';
const request = require('supertest');


import mongoose from 'mongoose';

describe('Product Search Test', () => {

    describe('Sample Test', () => {
        it('should test that true === true', () => {
          expect(true).toBe(true);
        });
    });

    it('Wrong URI', async () => {
        //- incase of wrong uri
        const response = await request(app).get('/product/any1');
        expect(response.status).toBe(404);
        mongoose.connection.close();
    });
});

beforeAll(done => {
    return done();
});

afterEach(function(done) {
    mongoose.disconnect();
    return done();
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    return done();
});
