import request from 'supertest';
import express from 'express';
import router from '../routes/feedbackRoute.js'; // assuming you have a feedbackRoute
import { Feedback } from '../models/feedbackModel.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use('/', router);

describe('Feedback Routes', () => {
    beforeAll(async () => {
        const url = 'mongodb://127.0.0.1/test';
        await mongoose.connect(url, { useNewUrlParser: true });
    }, 20000); // 20 seconds timeout

    it('should save feedback to the database', async () => {
        const res = await request(app)
            .post('/')
            .send({
                recommend: "Yes",
                again: "No",
                feedback: "Great service!"
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.recommend).toEqual("Yes");
        expect(res.body.again).toEqual("No");
        expect(res.body.feedback).toEqual("Great service!");
    });

    it('should get all feedbacks from the database', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    afterAll(async () => {
        await Feedback.deleteMany();
        await mongoose.connection.close();
    }, 20000); // 20 seconds timeout
});