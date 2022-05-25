// static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 4;
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
        return new Fruit('banana', '바나나');
    }
    // 인스턴스 레벨의 메서드
    display = () => console.log(`${this.name}, ${this.emoji}`)
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

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

Math.pow();
Number.isFinite(1);