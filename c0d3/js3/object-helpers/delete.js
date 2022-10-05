// This function deletes the key (and its value) from an object. Example:
// deletes는 키와 그 밸류를 오브젝트에서 삭제한다.

const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong',
    thanos: 'powerful'
}
delete info.thanos
console.log(info);

/*

Shouldn't it be Object.delete(info)?
Object.delete(info)처럼 안쓰는 이유는 뭘까요?

Just when you were getting used to everything being a static function of the Object type, we switched it up by introducing delete! 
방금 당신이 오브젝트 타입의 정적 펑션에 대해 안 순간... 우리는 delete를 소개해서 논점을 스위치하고 싶어요. 

delete is actually an operator, and it can work on array elements and some variables, too—but in practice, you'll mostly see it used on objects.
delete는 사실 연산자입니다. 이것은 어레이 엘리먼트나 몇가지 변수에도 사용할 수 있지만, 대부분의 경우에서는
오브젝트에서 사용하게 됩니다.

*/