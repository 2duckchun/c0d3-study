const fn = require('./preflight.js')
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

describe('less3Diff function', () => {
    it('정답이 맞아야 한다.', () => {
      const str1 = "spiderman"
      const str2 = "spyderman"
      const result = fn.less3Diff(str1, str2)
      expect(result).toEqual(true)
    })
    it('정답이 틀려야 한다.', () => {
      const str1 = "spyyyyman"
      const str2 = "spyderman"
      const result = fn.less3Diff(str1, str2)
      expect(result).toEqual(false)
    })
    it('문자열길이가 2개인데 다 틀릴 경우', () => {
      const str1 = "ab"
      const str2 = "cd"
      const result = fn.less3Diff(str1, str2)
      expect(result).toEqual(true)
    })
  })

describe('reverso function', () => {
    it('문자열을 입력했을 때', () => {
      const str = "kimtaesoo"
      const result = fn.reverso(str)
      expect(result).toEqual("ooseatmik")
    })
    it('문자열 길이가 하나인 것을 입력', () => {
        const str = "a"
        const result = fn.reverso(str)
        expect(result).toEqual("a")
    })
    it('나니모나이', () => {
        const str = ""
        const result = fn.reverso(str)
        expect(result).toEqual("")
    })
  })

  describe('delayAndCall function', () => {
    jest.useFakeTimers()
    it('1초 뒤', () => {
      const callback = jest.fn()
      const fun = fn.delayAndCall(1000, callback)
      fun()
      expect(callback).not.toBeCalled()
      jest.advanceTimersByTime(1000)
      expect(callback).toBeCalled()
    })
    it('반복적인 콜백', () => {
      const callback = jest.fn()
      const fun = fn.delayAndCall(1000, callback)
      fun()
      expect(callback).not.toBeCalled()
      jest.runAllTimers()
      expect(callback).toHaveBeenCalledTimes(1)
      fun()
      jest.runAllTimers()
      expect(callback).toHaveBeenCalledTimes(2)
    })
  })

  describe('Prime Number 확인', () => {
    it('음수값을 넣었을 때', () => {
      const num = -5
      const result = fn.isPrime1(num)
      expect(result).toEqual(false)
    })
    it('소수를 넣었을 때', () => {
      const num = 7
      const result = fn.isPrime1(num)
      expect(result).toEqual(true)
    })
    it('합성수를 넣었을 때', () => {
      const num = 8
      const result = fn.isPrime1(num)
      expect(result).toEqual(false)
    })
  })

  describe('소수값 저장', () => {
    it('음수값을 넣었을 때', () => {
      const start = -2
      const getPrime1 = fn.primeMachine(start)
      expect(getPrime1()).toEqual(2)
      expect(getPrime1()).toEqual(3)
    })
    it('소수를 넣었을 때', () => {
      const start = 5
      const getPrime2 = fn.primeMachine(start)
      expect(getPrime2()).toEqual(7)
      expect(getPrime2()).toEqual(11)
    })
    it('합성수를 넣었을 때', () => {
      const start = 6
      const getPrime3 = fn.primeMachine(start)
      expect(getPrime3()).toEqual(7)
      expect(getPrime3()).toEqual(11)
    })
  })