jest.mock('request')
const request = require('request')
const fs = require('fs')
const lessons = require('./c0d3')
const titlesDoc = require('./c0d3')
const pokemon = require('./c0d3')
const getCountry = require('./c0d3')

describe('lessons', () => {
  test(`console log should not be called if lessons `, () => {
    request.mockClear()
    lessons.printLessons()
    expect(request.mock.calls.length).toEqual(1)
    const firstCall = request.mock.calls[0]
    expect(firstCall[0]).toEqual('https://c0d3.com/api/lessons')
  })

  test('console.log should be called once if length of lessons array is 1', () => {
    request.mockClear()
    lessons.printLessons()
    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'testing'
        }
      ])
    )
    expect(request.mock.calls.length).toEqual(1)
    expect(console.log.mock.calls[0][0]).toEqual('testing')
  })

  test('console.log should return 3 times if lessons array has 3 elements', () => {
    request.mockClear()
    lessons.printLessons()

    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'Testing1'
        },
        {
          title: 'Testing2'
        },
        {
          title: 'Testing3'
        }
      ])
    )
    expect(console.log.mock.calls.length).toEqual(3)
    expect(console.log.mock.calls[0][0]).toEqual('Testing1')
    expect(console.log.mock.calls[1][0]).toEqual('Testing2')
    expect(console.log.mock.calls[2][0]).toEqual('Testing3')
  })
})


describe('Titles Document', () => {
  test('should write two titles', () => {
    request.mockClear()
    titlesDoc.createTitlesDoc()

    fs.writeFile = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'c0d3'
        },
        {
          title: 'recursion'
        }
      ])
    )
    expect(fs.writeFile.mock.calls.length).toEqual(1)
    expect(fs.writeFile.mock.calls[0][1]).toEqual(
      '<h1>c0d3</h1><h1>recursion</h1>'
    )
  })
})

describe('Pokemons', () => {
  test('should write two different pokemon names', () => {
    request.mockClear()
    pokemon.getNames()

    fs.writeFile = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify({
        results: [
          {
            name: 'RahiZzYyY'
          },
          {
            name: 'McGiggles'
          },
          {
            name: 'BrownDynamite'
          }
        ]
      })
    )
    expect(fs.writeFile.mock.calls.length).toEqual(1)
    expect(fs.writeFile.mock.calls[0][1]).toEqual(
      '<h1>RahiZzYyY</h1><h1>McGiggles</h1><h1>BrownDynamite</h1>'
    )
  })
})

describe('Countries', () => {
  test('find the country with most cities', () => {
    request.mockClear()
    getCountry.getMostCities()

    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify({
        results: [
          {
            name: 'Narnia',
            cities: 100
          },
          {
            name: 'SpaceJam',
            cities: 48
          },
          {
            name: 'Pluto',
            cities: 250
          },
          {
            name: 'Galaxy',
            cities: 20
          }
        ]
      })
    )
    expect(console.log.mock.calls[0][0]).toEqual('Pluto')
  })
})