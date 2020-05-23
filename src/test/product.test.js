//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
import got from 'got';
// var got = require('got');

//Require the dev-dependencies

describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });
});