import mongoose from 'mongoose';
import { VarientA } from '../models/varientAModel';
import supertest from 'supertest';
import app from '../index';
import assert from 'assert';

describe('VarientA Model Test', () => {
    beforeAll((done) => {
      mongoose.connect('mongodb+srv://ashan:root@benchmarkx.wwck7lx.mongodb.net/benchmarkx?retryWrites=true&w=majority&appName=BenchmarkX',
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => done());
    }, 10000);
  
    afterAll((done) => {
      mongoose.connection.close(() => done());
    }, 10000);
  
    it('should create & save new VarientA successfully', async () => {
      const varientAData = { varientAClicks: 5 };
      const validVarientA = new VarientA(varientAData);
      const savedVarientA = await validVarientA.save();
  
      // Object Id should be defined when successfully saved to MongoDB.
      assert(savedVarientA._id);
  
      // expect savedVarientA to match varientAData
      assert.equal(savedVarientA.varientAClicks, varientAData.varientAClicks);
    }, 10000);
  });