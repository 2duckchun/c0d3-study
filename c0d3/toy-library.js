function toyFunction() {
    return {
        toyMethod : (params) => {
            if (typeof params === "function") {
                const callsign = "2DC"
                return params(callsign) + "을 콜백함수로 호출"
            } else {
                return params + "을 원시값으로 호출"
            }
        },
        justReturnParams : (params) => {
            return params
        }
    }
}

const toy = toyFunction()

console.log(toy.toyMethod("2DC"))
console.log(toy.toyMethod((params) => {
    return params + "는 잘생김"
}))
console.log(toy.justReturnParams("공부열심히해야지"))