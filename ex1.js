/* Write a function named logNonMatching that console.log
every character in word, except for one given character */

// 일단 인덱스따라 쭉 출력
// 조건을 건다. 해당 인덱스의 문자열이 ex랑 같은지
// 같다면 출력없이 재귀함수 탄다.

const logNonMatching = (str, ex, i = 0) => {
    if (i >= str.length) {
        return
    }
    if (str[i] === ex) {
        return logNonMatching(str, ex, i = i + 1)
    }
    console.log(str[i]);
    return logNonMatching(str, ex, i = i + 1)
}

logNonMatching('hello world', 'l')