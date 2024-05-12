import request from 'supertest';
import express from 'express';
import router from '../routes/heatmapRoute.js'; // adjust the path to your router file

const app = express();
app.use(express.json());
app.use('/', router);

describe('POST /', () => {
  it('should save heatmap data to the database and return it', async () => {
    const response = await request(app)
      .post('/')
      .send({ x: 10, y: 20 });

    expect(response.statusCode).toBe(201);
    expect(response.body.x).toBe(10);
    expect(response.body.y).toBe(20);
  }, 30000); // 10 seconds timeout
});

describe('GET /', () => {
  it('should get all heatmap data from the database', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});