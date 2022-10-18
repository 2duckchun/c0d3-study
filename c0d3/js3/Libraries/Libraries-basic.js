/* 
Now that you know how to use require, let's try to require a library that other people have written.
어떻게 require를 쓰는 지 알았다. 지금시간은 라이브러리를 require를 통해 불러오는 연습을 해보자.

A simple library that does not require any download is fs, a library that gives you functions to interact with the files and folders on your computer.
간단한 라이브러리들은 굳이 다운로드 하지 않아도 된다. fs가 그 중 하나이며, 이는 컴퓨터 내 폴더와 파일과 상호작용할 수 있게 도와주는 라이브러리이다.

*/
const fs = require('fs')
fs.readdir('./', (err, files) => {
    if (files.length > 10) {
        console.log(files)
    }
})

/*
fs.readdir takes in 2 arguments, a string and a function.
fs.readdir는 2개의 인수를 받는다. (스트링과 함수)

*/