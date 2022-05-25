// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
// break 중요중요중요중요

let day = 8; // 0:월요일 ~ 6:일요일
let dayName;
switch(day) {
    case 0:
      dayName = '월요일';
      break;
    case 1:
      dayName = '화요일';
      break;
    case 2:
      dayName = '수요일';
      break;
    case 3:
      dayName = '목요일';
      break;
    case 4:
      dayName = '금요일';
      break;
    case 5:
      dayName = '토요일';
      break;
    case 6:
      dayName = '일요일';
      break;
    default:
      console.log('해당하는 요일이 없음');
      dayName = '제대로 써라'
}
console.log(dayName);

let condition = 'god' // okay, good -> 좋음, bad -> 나쁨!
let text;
switch(condition) {
    case 'okay':
    case 'good':
        text = '좋음!';
        break;
    case 'bad':
        text = '나쁨!';
        break;
    default:
    console.log('해당하는 컨디션이 없음');
    text = '제대로 쓰라고';
}
console.log(text);