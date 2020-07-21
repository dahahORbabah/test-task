const request = require('supertest');
const testProps = require('./mocks/giraffe.mock')
const app = require('../src/server');
const mongoose = require('mongoose');

describe('Testing routes controller', () => {
    let id = null

    it('Create new settings', async () => {
        const response = await request(app).post('/api/giraffe').send(testProps);
        const settings = response.body;

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(settings._id).not.toEqual('');
        id = settings._id;
    });

    it('Get settings from server', async () => {
        const response = await request(app).get(`/api/giraffe/${id}`);
        const settings = response.body;
        
        expect(settings.name).toEqual('Egor');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });

    it('Edit settings', async () => {
        const updatedSettings = { name: 'Igor', weight: 600 };
        const response = await request(app).put(`/api/giraffe/${id}`).send(updatedSettings);        
        const settings = response.body;

        expect(settings.name).toEqual('Igor');
        expect(settings.weight).toEqual(600);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
    });

    it ('Delete component', async () => {        
        const response = await request(app).delete(`/api/giraffe/${id}`);

        expect(response.status).toEqual(200);
    });

    afterAll(async () => {
        await mongoose.connection.close()
    })
});
