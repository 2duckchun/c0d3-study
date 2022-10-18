// Now that you know how to import files, you should try to import some functions that other people have written!
// 이제 어떻게 파일을 import하는지 알았으니, 다른 기능을 import해서 기능을 활용해보자.

/*
Write a function called makeFiles that takes in a number (X) and creates X+1 files using fs.writeFile.
makeFiles라는 함수를 작성해라. 숫자(X)를 인수로받고, x+1까지의 파일을 만들어내는, fs.writeFile을 작성해서.

The filenames should look like: trainer0.txt, trainer1.txt, trainer2.txt, ... trainerX.txt.
파일네임은 trainer0.txt, trainer1.txt.... 와 같이 구성된다.

When you open the file, each file should have the contents: Gotta catch 'em all
파일을 열면, Gotta catch 'em all이 컨텐츠로 나온다.

fs.writeFile takes in 3 arguments:
fs.writeFile은 3개의 인수를 받는다.
string(filename), string(file content), function(파일을 다 만든 뒤 실행되는 함수이다; 에러를 확인하거나, 파일이 전부 작성된지 알려주는 기능 등등)
*/

const fs = require('fs')

const makeFiles = (x, i = 0) => {
    if (x < i) return
    fs.writeFile(`./trainer${i}.txt`, `Gotta catch 'em all`, () => {
        console.log('i made the file');
    })
    return makeFiles(x, i + 1)
}

makeFiles(10)