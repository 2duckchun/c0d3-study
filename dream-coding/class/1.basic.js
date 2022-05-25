// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스
class Fruit {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => console.log(`${this.name}, ${this.emoji}`)
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// melon은 Fruit 클래스의 인스턴스이다.
const melon = new Fruit('melon', '🍈');

console.log(apple);
console.log(melon);
console.log(apple.name);
console.log(apple.emoji);
console.log(melon.name);
console.log(melon.emoji);
// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name: 'DC'};