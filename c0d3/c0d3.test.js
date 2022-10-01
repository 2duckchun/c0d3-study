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

describe('sum function', () => {
  it('should find sum of an array of numbers', () => {
    const result = [2, 17, 3, -3].sum()
    expect(result).toEqual(19)
  })
  it('should add strings together', () => {
    const data = ['<p>', "<img src='https://placebear.com/800/710'>", '</p>']
    const result = data.sum()
    expect(result).toEqual(
      "<p><img src='https://placebear.com/800/710'></p>"
    )
  })
  it('should return 0 for an empty array', () => {
    const result = [].sum()
    expect(result).toEqual(undefined)
  })
})

describe('pad function', () => {
  it('should modify the original array', () => {
    const arr = ['Doctor']
    arr.pad(1, 'Strange')
    expect(arr).toEqual(['Doctor', 'Strange'])
  })
  it('should pad multiple times', () => {
    const arr = ["<button name='submit'></button>", '<div></div>']
    arr.pad(2, '<br/>')
    expect(arr).toEqual([
      "<button name='submit'></button>",
      '<div></div>',
      '<br/>',
      '<br/>'
    ])
  })
  it('should return same array when given negative pad number', () => {
    const result = ['Quill', 'Gamora'].pad(-2, 'Drax')
    expect(result).toEqual(['Quill', 'Gamora'])
  })
  it('should return same array when given zero pad number', () => {
    const result = ['Quill', 'Gamora'].pad(0, 'Drax')
    expect(result).toEqual(['Quill', 'Gamora'])
  })
})

describe('fizzbuzz function', () => {
  it('should change numbers divisible by 3 to fizz', () => {
    const magicNumbers = [1, 2, 3, 6, 19, 18]
    magicNumbers.fizzbuzz()
    expect(magicNumbers).toEqual([1, 2, 'fizz', 'fizz', 19, 'fizz'])
  })
  it('should change numbers divisible by 5 to buzz', () => {
    const magicNumbers = [1, 2, 5, 10, 11]
    magicNumbers.fizzbuzz()
    expect(magicNumbers).toEqual([1, 2, 'buzz', 'buzz', 11])
  })
  it('should change numbers divisible by 15 to fizzbuzz', () => {
    const magicNumbers = [1, 2, 4, 15, 16, 30]
    magicNumbers.fizzbuzz()
    expect(magicNumbers).toEqual([1, 2, 4, 'fizzbuzz', 16, 'fizzbuzz'])
  })
  it('should correctly change 3 to fizz, 5 to buzz, and 15 to fizzbuzz', () => {
    const magicNumbers = [9, 80, 12, 2, 30]
    magicNumbers.fizzbuzz()
    expect(magicNumbers).toEqual(['fizz', 'buzz', 'fizz', 2, 'fizzbuzz'])
  })
})

describe('removeEvens function', () => {
  it('should remove even numbers from various positions', () => {
    const arr = [9, 80, 11, 2]
    arr.removeEvens()
    expect(arr).toEqual([9, 11])
  })
  it('should remove even numbers from concurrent positions', () => {
    const arr = [2, 4, 6, 7, 8]
    arr.removeEvens()
    expect(arr).toEqual([7])
  })
  it('should leave array the same if no evens', () => {
    const arr = [1, 3, 9, 21]
    arr.removeEvens()
    expect(arr).toEqual([1, 3, 9, 21])
  })
  it('should leave empty array the same', () => {
    const arr = []
    arr.removeEvens()
    expect(arr).toEqual([])
  })
})

describe('getIterator function', () => {
  it('should iterate through 3 elements', () => {
    const iterate = ['PayPal', 'Google', 'Netflix'].getIterator()
    expect(iterate()).toEqual('PayPal')
    expect(iterate()).toEqual('Google')
    expect(iterate()).toEqual('Netflix')
  })
  it('should return to beginning once done', () => {
    const iterate = [9, 80, 12, 2].getIterator()
    expect(iterate()).toEqual(9)
    expect(iterate()).toEqual(80)
    expect(iterate()).toEqual(12)
    expect(iterate()).toEqual(2)
    expect(iterate()).toEqual(9)
    expect(iterate()).toEqual(80)
  })
  it('should return undefined for empty array iterator', () => {
    const iterate = [].getIterator()
    expect(iterate()).toEqual(undefined)
  })
  it('should iterate through one element', () => {
    const iterate = ['Ironman'].getIterator()
    expect(iterate()).toEqual('Ironman')
    expect(iterate()).toEqual('Ironman')
  })
})
