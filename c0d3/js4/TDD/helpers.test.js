const helpers = require('./helpers')

/*
 When we run our file with the jest framework, jest provides us
 with a few functions. The function our tests will go inside
 is describe, which takes in 2 arguments (string and function).

 제스트 프레임워크를 이용해서 테스트파일을 구동할 때, 제스트는 몇가지 함수를 제공하게 되는데
 테스트를 돕는 함수이다. 그 함수이름은 describe고 2개의 인수를 받는다. (문자열, 함수)

 First argument describes the function you are testing:
 second argument is a function that contains all the tests.
 */
describe('sumAll function', () => {
    it('should add numbers', () => {
        const result = helpers.sumAll([9, 8, 7])
        expect(result).toEqual(24)
    })

    it('should add - numbers', () => {
        const result = helpers.sumAll([-9, 8, 7])
        expect(result).toEqual(6)
    })

    it('should return 0 if empty array', () => {
        const result = helpers.sumAll([])
        expect(result).toEqual(0)
    })

    it('should add string', () => {
        const original = ['2', 'D', 'C']
        const result = helpers.sumAll(original)
        expect(result).toEqual('2DC')
        expect(original).toEqual(['2', 'D', 'C'])
    })
})