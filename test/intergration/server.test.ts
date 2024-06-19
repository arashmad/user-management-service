import request from 'supertest';

import { application, Shutdown } from '../../src/server';

describe('Our Application', () => {
    afterAll((done) => {
        Shutdown(done);
    });
    it('Starts and has the proper test environment', async () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(application).toBeDefined();
    }, 10000);

    it('Returns all options allowed to be called by customers (http method)', async () => {
        const response = await request(application).options('/');
        expect(response.status).toBe(200);
        expect(response.headers['access-control-allow-methods']).toBe('PUT, POST, PATCH, DELETE, GET');
    });

    it('Endpoint not found', async () => {
        const response = await request(application).get('/');
        console.log(response.error.toString());
        expect(response.status).toBe(404);
        expect(response.body.error.message).toBe('Not found');
    });
});
