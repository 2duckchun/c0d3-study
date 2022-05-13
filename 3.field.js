// 접근제어자 - 캡슐화
// 내부사항 데이터를 외부에서 보이지 않도록!
// private(#), public(기본), protected,

class Fruit {
    #name;
    #emoji;
    #type = '과일'; // 클래스 생성과 동시에 '과일'로 초기화되어있음
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }
   #display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; //#field는 외부에서 접근이 불가능함
console.log(apple);
console.log(apple);
apple.display();