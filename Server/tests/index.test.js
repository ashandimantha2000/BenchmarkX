import supertest from 'supertest';
import app from '../index'; // assuming your server file is named index.js

it('should return 200 for GET method', async () => {
  const response = await supertest(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello from BenchmarkX');
});

describe('Feedback Route', () => {
  it('should return 200 for GET method', async () => {
    const response = await supertest(app).get('/feedback');
    expect(response.statusCode).toBe(200);
  });
});

describe('Sessions Route', () => {
  it('should return 200 for GET method', async () => {
    const response = await supertest(app).get('/sessions');
    expect(response.statusCode).toBe(200);
  });
});

describe('VarientA Route', () => {
    it('should return 200 for GET method', async () => {
        const response = await supertest(app).get('/varientA');
        expect(response.statusCode).toBe(200);
    });
    });

describe('VarientB Route', () => {
    it('should return 200 for GET method', async () => {
        const response = await supertest(app).get('/varientB');
        expect(response.statusCode).toBe(200);
    });
    });

describe('Heatmap Route', () => {
    it('should return 200 for GET method', async () => {
        const response = await supertest(app).get('/heatmap');
        expect(response.statusCode).toBe(200);
    });
    });


    


