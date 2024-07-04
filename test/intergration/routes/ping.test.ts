import request from 'supertest';

import { application, Shutdown } from '../../../src/server';

describe('Test /ping', () => {
    afterAll((done) => {
        Shutdown(done);
    });
    it('Making sure that service is responding properly.', async () => {
        const response = await request(application).get('/ping');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('pong');
    });
});
