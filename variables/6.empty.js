// null, undefined

let variable;
console.log(variable);

variable = null;
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모름
activeItem = null; // 활성화된 아이템이 없음

console.log(typeof 123);
console.log(typeof '123');
console.log(typeof null); // 널은 할당되면 메모리상에 오브젝트로 할당됨. (확실하게 비어있음)
console.log(typeof undefined); // 아예 정해지지 않음.