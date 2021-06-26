const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('the amount of blogs is the correct', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body.length).toBe(1)
  })

  test('property id exists', async () => {
    const response = await api.get('/api/blogs')
    const contents = response.body.map(r => r.id)
    expect(contents).toBeDefined()
  })

afterAll(() => {
  mongoose.connection.close()
})