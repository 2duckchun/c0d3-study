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