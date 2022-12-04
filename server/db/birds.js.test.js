const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

const { getBirds, getBirdById } = require('./bird')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('db functions', () => {
  test('getBirds should return a list of birds and their properties', () => {
    expect.assertions(2)
    return getBirds(testDb).then((birds) => {
      expect(birds).toHaveLength(15)
      expect(birds[0].ML_Catalog_Number).toBe(212043711)
    })
  })

  test('getBirdById() should return correct bird', () => {
    return getBirdById(1, testDb).then((bird) => {
      expect(bird.Common_Name).toBe('South Island Takahe')
    })
  })
})
