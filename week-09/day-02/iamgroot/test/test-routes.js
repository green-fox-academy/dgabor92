'use strict';

const app = require('../routes');
const expect = require('chai');
const request = require('supertest');

describe('Groot endpoint', () => {
  it('GET /groot  should return status code 400', () => {
    request(app)
      .get('/groot')
      .expect(400)
      .end((err, res) => {});
  });
});

describe('Groot endpoint', () => {
  it('GET /groot with query params should return status code 200', () => {
    request(app)
      .get('/groot?message=message')
      .expect(200)
      .end((err, res) => {});
  });
});
