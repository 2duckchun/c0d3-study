/*
An API (application programming interface) is an interface that other engineers set up for you to interact with. For example:
API (application programming interface)는 엔지니어들이 셋업해놓은 인터페이스이다. 예시로...

넷플릭스 API에 리퀘스트를 보내면, 넷플릭스의 리스트에 있는 영화들을 받아볼 수 있다.
구글 컨텍트 API에 리퀘스트를 보내면, 내 친구들의 전화번호를 받을 수 있다.
트위터 API에 사람들 핸드폰 번호를 적으면, 폰넘버 관련 메시지를 받을 수 있다. 등등

엄청... 엄청 많다.
위의 API로 뭘 만들 수 있을 까?

모든 각각의 친구들에게 1주에 한번씩 넷플릭스의 탑 레이트 영화 목록 메시지를 보내는 파일을 작성할 수 있다. 
*/

// 아래의 코드는 동작하지 않음.

const request = require('request')

const txtTopRatedMoviesTo = (people) => {
    request('netflix.com/api/topCatalog', (movies) => {
        people.forEach(number => {
            request('twilio.com/api/sendMessage', { token: twilio_token, to: number })
        })
    })
}

const runApp = () => {
    request('google.com/contacts', { token: google_token }, contacts => {
        txtTopRatedMoviesTo(contacts)
    })

    setTimeout(runApp, 7 * 24 * 60 * 60 * 1000)
}

runApp()