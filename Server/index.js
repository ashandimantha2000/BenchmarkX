import {PORT, MONGO_URI} from './.env';
import express from 'express'
import mongoose from 'mongoose';

const app = express();

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});

