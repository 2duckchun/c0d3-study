const fn = require('./c0d3.js')

describe('longestString function', () => {
  it('should find the longest string from the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.longestString(info)).toEqual('arrogant')
  })
  it('should find the longest string from the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    expect(fn.longestString(leaders)).toEqual('Sabrina')
  })
  it('should return the empty string for an empty object', () => {
    expect(fn.longestString({})).toEqual('')
  })
})

describe('keyOfLongestString function', () => {
  it('should find key of longest string in the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.keyOfLongestString(info)).toEqual('ironman')
  })
  it('should find key of longest string at the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    expect(fn.keyOfLongestString(leaders)).toEqual('saffron')
  })
  it('should return undefined (no key) for an empty object', () => {
    expect(fn.keyOfLongestString({})).toEqual(undefined)
  })
})

describe('commas function', () => {
  it('should separate three items', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.commas(info)).toEqual('arrogant, naive, strong')
  })
  it('should put no commas if only one element', () => {
    expect(fn.commas(['funny'])).toEqual('funny')
  })
  it('should return an empty string if no elements', () => {
    expect(fn.commas([])).toEqual('')
  })
})

describe('forEach function', () => {
  it('should run a function 3 times on 3 elements', () => {
    const fun = jest.fn()
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    info.forEach(fun)
    expect(fun).toHaveBeenCalledTimes(3)
  })
  it('should run a function 0 times on an empty object', () => {
    const fun = jest.fn()
    const imEmpty = {}
    imEmpty.forEach(fun)
    expect(fun).not.toHaveBeenCalled()
  })
  it('should let functions access object values & positions', () => {
    const vals = []
    const fun = (_k, v, i) => {
      vals.push(i + v)
    }
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    info.forEach(fun)
    expect(vals).toEqual(['0arrogant', '1naive', '2strong'])
  })
})

describe('filter function', () => {
  const leaders = {
    vermilion: 'Surge',
    cinnabar: 'Blaine',
    fuchsia: 'Koga',
    saffron: 'Sabrina'
  }
  it('should filter based on keys', () => {
    const seven = k => {
      return k.length === 7
    }
    const result = leaders.filter(seven)
    expect(result).toEqual({ fuchsia: 'Koga', saffron: 'Sabrina' })
  })
  it('should filter based on keys', () => {
    const six = (_k, v) => {
      return v.length < 6
    }
    const result = leaders.filter(six)
    expect(result).toEqual({ vermilion: 'Surge', fuchsia: 'Koga' })
  })
  it('should return an empty object if no matches', () => {
    const celadon = k => {
      return k === 'Celadon'
    }
    const result = leaders.filter(celadon)
    expect(result).toEqual({})
  })
})

describe('reduce function', () => {
  it('should let functions access keys, values, & positions', () => {
    const fun = (acc, key, value, i) => {
      return acc + `${key}-${i}-${value},`
    }
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    const result = info.reduce(fun, '')
    const exp = 'ironman-0-arrogant,spiderman-1-naive,hulk-2-strong,'
    expect(result).toEqual(exp)
  })
  it('should return the starting value if the object is empty', () => {
    const imEmpty = {}
    const result = imEmpty.reduce(() => {}, 'I am Groot')
    expect(result).toEqual('I am Groot')
  })
})

describe('getMostCommon function', () => {
  it('should return a number as the most common', () => {
    const result = [9, 8, 7, 8, 7, 7, 7].getMostCommon()
    expect(result).toEqual(7)
  })
  it('should return a string as the most common', () => {
    const arr = ['Batman', 8, 7, 'Batman', 'Robin']
    const result = arr.getMostCommon()
    expect(result).toEqual('Batman')
  })
  it('should return first element if all equally common', () => {
    const types = ['grass', 'poison', 'fire', 'flying', 'water', 'bug']
    const result = types.getMostCommon()
    expect(result).toEqual('grass')
  })
  it('should return null on an empty array', () => {
    const result = [].getMostCommon()
    expect(result).toEqual(null)
  })
})

describe('getNext function', () => {
  it('should iterate through 3 elements', () => {
    const arr = ['Edna', 'Optimus', 'Minion']
    let result = arr.getNext()
    expect(result).toEqual('Edna')
    expect(arr.getNext()).toEqual('Optimus')
    expect(arr.getNext()).toEqual('Minion')
  })
  it('should return to beginning once done', () => {
    const arr = [9, 80, 12, 2]
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
    expect(arr.getNext()).toEqual(12)
    expect(arr.getNext()).toEqual(2)
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
  })
  it('should return undefined for an empty array', () => {
    const arr = []
    expect(arr.getNext()).toEqual(undefined)
  })
  it('should iterate through one element', () => {
    const arr = ['Ironman']
    expect(arr.getNext()).toEqual('Ironman')
    expect(arr.getNext()).toEqual('Ironman')
  })
  it(`shouldn't iterate`, () => {
    const arr = []
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
  })
})
