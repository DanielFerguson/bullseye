import { describe, expect, test } from '@jest/globals';
import { stringIsUuid } from '../../src/helpers';
import * as request from 'supertest';

// TODO: Will need to include middleware permissions around editing.

describe('archers', () => {
    // GET /api/archers
    describe('get all archers', () => {
        test('can get all archers', async () => {
            const response = await request('http://localhost:3000')
                .get('/api/archers');

            expect(response.status).toBe(200);

            expect(response.body.archers[0].hasOwnProperty("id")).toBe(true);
            expect(response.body.archers[0].hasOwnProperty("name")).toBe(true);
            expect(response.body.archers[0].hasOwnProperty("createdAt")).toBe(true);

            expect(Object.keys(response.body.archers[0]).length === 3).toBe(true);
        });
    });

    // GET /api/archers/{id}
    describe('get a specific archer', () => {
        test('can get a specific archer', async () => {
            const archers = await request('http://localhost:3000')
                .get('/api/archers');

            const archer = archers.body.archers[0];

            const response = await request('http://localhost:3000')
                .get(`/api/archers/${archer.id}`);

            expect(response.status).toBe(200);
            expect(response.body.archer.id).toBe(archer.id);
            expect(response.body.archer.name).toBe(archer.name);
            expect(response.body.archer.createdAt).toBe(archer.createdAt);
            expect(Object.keys(response.body.archer).length === 4).toBe(true);
        });

        test('fails when trying to get an archer that doesnt exist', async () => {
            const response = await request('http://localhost:3000')
                .get('/api/archers/123');

            expect(response.status).toBe(404);
            expect(response.body.message).toBe("Archer with an ID of 123 was not found.");
        });

        test('fails when you dont pass in an id', async () => {
            const response = await request('http://localhost:3000')
                .get('/api/archers/');

            expect(response.status).toBe(404);
        });
    });

    // POST /api/archers
    describe('create an archer', () => {
        test('can successfully create an archer', async () => {
            const response = await request('http://localhost:3000')
                .post('/api/archers')
                .send({
                    name: "John Smith"
                });

            expect(response.status).toBe(201);
            expect(response.body.archer.name).toBe('John Smith');
            expect(stringIsUuid(response.body.archer.id)).toBe(true);
            expect(response.body.archer.hasOwnProperty("id")).toBe(true);
            expect(response.body.archer.hasOwnProperty("name")).toBe(true);
            expect(response.body.archer.hasOwnProperty("createdAt")).toBe(true);
            expect(response.body.archer.hasOwnProperty("updatedAt")).toBe(true);
            expect(Object.keys(response.body.archer).length === 4).toBe(true);
        });

        test('cannot create an archer if body is not passed', async () => {
            const response = await request('http://localhost:3000')
                .post('/api/archers');

            expect(response.status).toBe(400);
            expect(response.body.message).toBe("The parameter `name` is required, but was not passed through.");
        });

        test('cannot create an archer if name is blank', async () => {
            const response = await request('http://localhost:3000')
                .post('/api/archers')
                .send({
                    name: null
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe("The parameter `name` is required, but was not passed through.");
        });

        test('cannot create an archer if name is empty', async () => {
            const response = await request('http://localhost:3000')
                .post('/api/archers')
                .send({
                    name: ""
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe("The parameter `name` is required, but was not passed through.");
        });
    });

    // DELETE /api/archers/{id}
    describe('can delete an archer', () => {
        test('can successfully delete an archer', async () => {
            const archers = await request('http://localhost:3000')
                .get('/api/archers');

            const archer = archers.body.archers[0];

            const response = await request('http://localhost:3000')
                .delete(`/api/archers/${archer.id}`);

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Archer successfully deleted.');
        });

        test('cannot delete every archer', async () => {
            const response = await request('http://localhost:3000')
                .delete('/api/archers');

            expect(response.status).toBe(404);
        });

        test('cannot delete an archer if no id is passed', async () => {
            const response = await request('http://localhost:3000')
                .delete(`/api/archers/`);

            expect(response.status).toBe(404);
        });

        test('cannot delete an archer if the id is not a uuid', async () => {
            const response = await request('http://localhost:3000')
                .delete(`/api/archers/123`);

            expect(response.status).toBe(400);
            expect(response.body.message === '123 is not an archer ID.').toBe(true);
        });
    })

    // GET /api/archers/{id}/games/{id}
    describe('can get the rounds for an archers games', () => {
        test('can successfully get the rounds for an archers game', async () => {
            const archers = await request('http://localhost:3000')
                .get('/api/archers');

            const archer = archers.body.archers[0];

            expect(false).toBe(true);
            // const game = archer.games[0];

            // const response = await request('http://localhost:3000')
            //     .get(`/api/archers/${archer.id}/games/${game.id}`);

            // expect(response.status).toBe(200);
        });

        test('cannot get a game that doesnt exist', async () => {
            expect(false).toBe(true);
        });

        test('throws an error if the id isnt a uuid', async () => {
            expect(false).toBe(true);
        });
    });

    // DELETE /api/archers/{id}/games/{id}
    describe('can delete a round from a game', () => {
        test('can successfully delete a round from an archers game', async () => {
            expect(false).toBe(true);
        });

        test('throws an error if the id isnt a uuid', async () => {
            expect(false).toBe(true);
        });
    });
});
