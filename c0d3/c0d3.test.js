const fn = require('./c0d3.js')

describe('oddToZero function', () => {
  it('should zero when some elements are odd', () => {
    const result = fn.oddToZero([1, 2, 3, 4, 5])
    expect(result).toEqual([0, 2, 0, 4, 0])
  })
  it('should zero when all elements are odd', () => {
    const result = fn.oddToZero([1, 3])
    expect(result).toEqual([0, 0])
  })
  it('should return same array when no elements are odd', () => {
    const result = fn.oddToZero([8, 10, 12])
    expect(result).toEqual([8, 10, 12])
  })
})
// Although we're doing similar things to what we did in the last section,
// the thinking is different here         —instead of building an array piece-by-piece and returning it, 
// we're now returning individual elements that map will use to build a new array.

// Also note that unlike push, splice, and many others, arr.map doesn't modify arr.
// Just because a function belongs to an object doesn't mean it modifies that object.
// map 메서드가 push와 splice 등과 같지는 않다. arr.map은 arr을 변경시키지 않는다.
// 왜냐면 오브젝트에 속한 펑션이며, 오브젝트를 변경한다는 것을 의미하지는 않는다.


describe('firstLetters function', () => {
  it('should grab the first letters from 5 strings', () => {
    const result = fn.firstLetters(['hello', 'my', 'name', 'is', 'pikachu'])
    expect(result).toEqual(['h', 'm', 'n', 'i', 'p'])
  })
  it('should grab the first letters from 3 strings', () => {
    const result = fn.firstLetters(['JavaScript', 'is', 'awesome'])
    expect(result).toEqual(['J', 'i', 'a'])
  })
  it('should return an empty array when given an empty array', () => {
    const result = fn.firstLetters([])
    expect(result).toEqual([])
  })
})

describe('firstXToZero function', () => {
  it('should change 3 numbers to 0', () => {
    const result = fn.firstXToZero([0, 5, 9, 6], 3)
    expect(result).toEqual([0, 0, 0, 6])
  })
  it('should not modify the array when asked to change 0 elements', () => {
    const result = fn.firstXToZero(["Don't", 'change', 'me'], 0)
    expect(result).toEqual(["Don't", 'change', 'me'])
  })
  it('should change all to zero when X beyond array length', () => {
    const result = fn.firstXToZero([1, 2, 3], 4)
    expect(result).toEqual([0, 0, 0])
  })
})

describe('append', () => {
  it('should append a string to 5 strings', () => {
    const result = fn.append(
      ['hello', 'my', 'name', 'is', 'pikachu'],
      ' -log'
    )
    expect(result).toEqual([
      'hello -log',
      'my -log',
      'name -log',
      'is -log',
      'pikachu -log'
    ])
  })
  it('should append a string to 2 strings', () => {
    const result = fn.append(['<img/>', '<p></p>'], '<hr/>')
    expect(result).toEqual(['<img/><hr/>', '<p></p><hr/>'])
  })
  it('should not modify the original array', () => {
    const arr = ['Spiderman', 'Peter Parker']
    fn.append(arr, 'Mary Jane')
    expect(arr).toEqual(['Spiderman', 'Peter Parker'])
  })
})

describe('noMoreEvens function', () => {
  it('should remove evens from an array with a mix of numbers', () => {
    const result = fn.noMoreEvens([1, 2, 6, 4, 5])
    expect(result).toEqual([1, 5])
  })
  it('should remove all numbers when even', () => {
    const result = fn.noMoreEvens([2, 16, 40, 52])
    expect(result).toEqual([])
  })
  it('should not touch an array of all odd numbers', () => {
    const result = fn.noMoreEvens([1, 571, 3, 9])
    expect(result).toEqual([1, 571, 3, 9])
  })
  it('should remove negative even numbers as well', () => {
    const result = fn.noMoreEvens([-2, -571, -4])
    expect(result).toEqual([-571])
  })
})

describe('remove empty function', () => {
  it('should return [] when array is empty', () => {
    const result = fn.removeEmpty([])
    expect(result).toEqual([])
  })
  it('should return [] when array only has empty strings', () => {
    const result = fn.removeEmpty(['', '', ''])
    expect(result).toEqual([])
  })
  it('should return same array when array has no empty strings', () => {
    const result = fn.removeEmpty(['hello', 'world'])
    expect(result).toEqual(['hello', 'world'])
  })
  it('should return array without empty strings', () => {
    const result = fn.removeEmpty(['hello', 'world', '', 'name', '', 'is'])
    expect(result).toEqual(['hello', 'world', 'name', 'is'])
  })
})

describe('primesOnly function', () => {
  it('should return empty array if no primes', () => {
    const result = fn.primesOnly([-13, 0, 1, 4, 6])
    expect(result).toEqual([])
  })
  it('should return an identical array if all are prime', () => {
    const result = fn.primesOnly([2, 17, 1601, 7919])
    expect(result).toEqual([2, 17, 1601, 7919])
  })
})

// You are given an array arr.
// arr를 파라미터로 받는다.

// You need helper function isPrime to see if each value in the array is prime or not.
// isPrime이라는 헬퍼 펑션이 필요하다. (배열의 각 값이 소수인지 아닌지를 '판별'하기 위해서)

// User array helper function filter to filter prime numbers only.
// 유저 어레이 헬퍼 펑션은 prime number만을 필터링해서 새로운 배열로 만든다.

describe('firstPrime function', () => {
  it('should find a prime at the beginning of the array', () => {
    const result = fn.firstPrime([2, 17, 1601, 7919])
    expect(result).toEqual(2)
  })
  it('should find a prime at the end of the array', () => {
    const result = fn.firstPrime([1, 4, 16, 7919])
    expect(result).toEqual(7919)
  })
  it('should find no primes in an empty array', () => {
    expect(fn.firstPrime([])).toEqual(undefined)
  })
})

describe('sum function', () => {
  it('should return 0 for an empty array', () => {
    const result = fn.sum([])
    expect(result).toEqual(0)
  })
  it('should return negative for array of negative numbers', () => {
    const result = fn.sum([-2, -3])
    expect(result).toEqual(-5)
  })
  it('should add up array with negative and postive numbers', () => {
    const result = fn.sum([-20, -3, 20])
    expect(result).toEqual(-3)
  })
})

describe('largest function', () => {
  it('should find the largest of 3 numbers', () => {
    const result = fn.largest([5, 3, 9])
    expect(result).toEqual(9)
  })
  it('should find the largest of 4 negative numbers', () => {
    const result = fn.largest([-20, -2, -5, -10])
    expect(result).toEqual(-2)
  })
  it('should return undefined on an empty array', () => {
    expect(fn.largest([])).toEqual(undefined)
  })
})

describe('longest function', () => {
  it('should find the longest string at the end of the array', () => {
    const result = fn.longest(['Thor', 'Loki', 'Rocket', 'Ant-Man'])
    expect(result).toEqual('Ant-Man')
  })
  it('should find the longest string in the middle of the array', () => {
    const result = fn.longest(['Thor', 'Spiderman', 'Ant-Man'])
    expect(result).toEqual('Spiderman')
  })
  it('should return string from array of length 1', () => {
    const result = fn.longest(['Wasp'])
    expect(result).toEqual('Wasp')
  })
})