const fn = require('./reverso.js')

describe('reverso function', () => {
    it('거꾸로 다른 4개', () => {
      const result = fn.reverso('가나다라')
      expect(result).toEqual("라다나가")
    })
    it('거꾸로 같은 5개', () => {
      const result = fn.reverso("가가가가가")
      expect(result).toEqual('가가가가가')
    })
  })