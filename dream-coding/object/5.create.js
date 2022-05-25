// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name}: 🍎`)
//     },
// };

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name}: 🍈`)
//     },
// };

/*    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    } */


// 생성자 함수 (첫 대문자)
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = function() {
        console.log(`${this.name}: ${this.emoji}`);
    }
    return this; // 생략해도 괜찮음
}

const apple = new Fruit('apple', '🍎');
const melon = new Fruit('melon', '🍈');

console.log(apple);
console.log(melon);
console.log(apple.name);
console.log(apple.emoji);
console.log(melon.name);
console.log(melon.emoji);