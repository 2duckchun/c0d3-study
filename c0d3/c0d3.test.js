const fn = require('./c0d3.js')

describe('removeCharX function', () => {
    it('should remove the first character', () => {
      const str = "We're in the endgame now."
      const result = fn.removeCharX(str, 0)
      expect(result).toEqual("e're in the endgame now.")
    })
    it('return the original string', () => {
      const str = 'a'
      const result = fn.removeCharX(str, 3)
      expect(result).toEqual('a')
    })
    it('return the original string', () => {
      const str = 'abc'
      const result = fn.removeCharX(str, -3)
      expect(result).toEqual('abc')
    })
  })

  describe('reverso function', () => {
    it('should reverse "sneakers"', () => {
      const result = fn.reverso('sneakers')
      expect(result).toEqual('srekaens')
    })
    it('should reverse strings of one letter', () => {
      const result = fn.reverso('s')
      expect(result).toEqual('s')
    })
    it('should return an empty string when given an empty string', () => {
      const result = fn.reverso('')
      expect(result).toEqual('')
    })
  })
  
  describe('delayAndCall function', () => {
    jest.useFakeTimers()
    it('should run function after 1000 milliseconds', () => {
      const callback = jest.fn()
      const fun = fn.delayAndCall(1000, callback)
      fun()
      expect(callback).not.toBeCalled() // It shouldn't run right away
      jest.advanceTimersByTime(1000)
      expect(callback).toBeCalled() // But after 1000ms
      // it should have run
    })
    it('should run callback repeatedly', () => {
      const callback = jest.fn()
      const fun = fn.delayAndCall(1000, callback)
      fun()
      expect(callback).not.toBeCalled() // It shouldn't run right away
      jest.runAllTimers()
      expect(callback).toHaveBeenCalledTimes(1) // Should have been
      // called once
      fun()
      jest.runAllTimers()
      expect(callback).toHaveBeenCalledTimes(2) // Now it should have
      // been called twice
    })
  })

  describe('primeMachine function', () => {
    it('should return next 2 primes starting with a negative number', () => {
      const getPrime1 = fn.primeMachine(-2)
      expect(getPrime1()).toEqual(2)
      expect(getPrime1()).toEqual(3)
    })
    it('should not return starting number if prime', () => {
      const getPrime2 = fn.primeMachine(5)
      expect(getPrime2()).toEqual(7)
      expect(getPrime2()).toEqual(11)
    })
    it('should return next 3 primes starting at 10', () => {
      const getPrime3 = fn.primeMachine(10)
      expect(getPrime3()).toEqual(11)
      expect(getPrime3()).toEqual(13)
      expect(getPrime3()).toEqual(17)
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

  describe('firstXToZero function', () => {
    it('should change 3 numbers to 0', () => {
      const result = fn.firstXToZero([0, 5, 9, 6], 3)
      expect(result).toEqual([0, 0, 0, 6])
    })
    it('should not modify the array when changing 0 elements', () => {
      const result = fn.firstXToZero(["Don't", 'change', 'me'], 0)
      expect(result).toEqual(["Don't", 'change', 'me'])
    })
    it('should change all to zero when X beyond array length', () => {
      const result = fn.firstXToZero([1, 2, 3], 4)
      expect(result).toEqual([0, 0, 0])
    })
  })

  describe('allPrime function', () => {
    it('should return true for an array of all primes', () => {
      const result = fn.allPrime([2, 3, 17, 19])
      expect(result).toEqual(true)
    })
    it('should return false for an array with some primes', () => {
      const result = fn.allPrime([0, 7, 11, 12])
      expect(result).toEqual(false)
    })
    it('should return true for an empty array', () => {
      const result = fn.allPrime([])
      expect(result).toEqual(true)
    })
  })

  describe('increasing function', () => {
    it('should return true for an increasing array', () => {
      const result = fn.increasing([2, 7, 9, 10])
      expect(result).toEqual(true)
    })
    it('should return false for an array that decreases', () => {
      const result = fn.increasing([19, 13, 17, 11])
      expect(result).toEqual(false)
    })
    it('should return false if elements are repeated', () => {
      const result = fn.increasing([2, 7, 7, 10])
      expect(result).toEqual(false)
    })
    it('should return true for an array of one number', () => {
      const result = fn.increasing([51])
      expect(result).toEqual(true)
    })
  })
  
  describe('copyArray function', () => {
    it('should copy an array of 3 elements', () => {
      const result = fn.copyArray([-5, -23, 'study'])
      expect(result).toEqual([-5, -23, 'study'])
    })
    it('should not modify original array', () => {
      const original = [
        'hi',
        1,
        () => {
          return 5
        },
        'apple',
        45
      ]
      const result = fn.copyArray(original)
      original[0] = 'Drax'
      expect(result[0]).toEqual('hi')
    })
    it('should copy an empty array', () => {
      const result = fn.copyArray([])
      expect(result).toEqual([])
    })
  })
  // `push` was the most obvious choice for this task, because we could start out with an empty array and add all the elements to it. 
  // We could have also used `unshift` if we'd started from the end. In the next section, we'll learn a much easier way to copy arrays.
  // push는 이 작업에서 가장 많이쓰이는 메서드일 것이다. 왜냐하면 우리는 빈 배열과 시작하고, 모든 요소를 추가해야하기 때문이다.
  // 또 우리는 unshift를 쓸 수도 있다. (배열을 역순으로 정리한다면, unshift로 빼서 추가해줄 수도 있음)

  describe('remove function', () => {
    it('should not remove anything', () => {
      const data = ['Rocket', 'Groot', 'Star-Lord']
      const result = fn.removeElement(data, 'Random')
      expect(result).toEqual(['Rocket', 'Groot', 'Star-Lord'])
    })
    it('should remove 1 element', () => {
      const data = ['Rocket', 'Groot', 'Star-Lord']
      const result = fn.removeElement(data, 'Star-Lord')
      expect(result).toEqual(['Rocket', 'Groot'])
    })
    it('should remove all elements', () => {
      const data = ['Rocket', 'Rocket', 'Rocket']
      const result = fn.removeElement(data, 'Rocket')
      expect(result).toEqual([])
    })
  })

  describe('copyWithout function', () => {
    it('should copy without 2 middle elements', () => {
      const result = fn.copyWithout([5, 2, 2, 9], 2)
      expect(result).toEqual([5, 9])
    })
    it('should not modify original array', () => {
      const arr = [5, 2, 2, 9]
      fn.copyWithout(arr, 2)
      expect(arr).toEqual([5, 2, 2, 9])
    })
    it('should copy without last 2 elements', () => {
      const result = fn.copyWithout([2, 2, 2, 3, 3], 3)
      expect(result).toEqual([2, 2, 2])
    })
    it('should return identical array if no matches', () => {
      const result = fn.copyWithout([2, 6, 4], 3)
      expect(result).toEqual([2, 6, 4])
    })
  })

  describe('copyReverse function', () => {
    it('should reverse copy an array of 4 elements', () => {
      const result = fn.copyReverse([1, 3, 5, 7])
      expect(result).toEqual([7, 5, 3, 1])
    })
    it('should not modify original array', () => {
      const arr = [1, 3, 5, 7]
      fn.copyReverse(arr)
      expect(arr).toEqual([1, 3, 5, 7])
    })
    it('should reverse copy an array of 1 element', () => {
      const result = fn.copyReverse(['bears'])
      expect(result).toEqual(['bears'])
    })
  })
  
  describe('copyLast function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk']
    const original = [...heroes]
    it('should skip the first 2 elements', () => {
      const result = fn.copyLast(heroes, 2)
      expect(result).toEqual(['Captain', 'Black Widow', 'Hulk'])
    })
    it('should not modify original array', () => {
      fn.copyLast(heroes, 2)
      expect(heroes).toEqual(original)
    })
    it('should skip the first 0 elements (copy whole array)', () => {
      const result = fn.copyLast(heroes, 0)
      expect(result).toEqual(heroes)
    })
    it('should return empty array if skipping past array length', () => {
      const result = fn.copyLast(heroes, 6)
      expect(result).toEqual([])
    })
  })