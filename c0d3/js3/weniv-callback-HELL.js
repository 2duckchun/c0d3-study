2duckchun
#5443

4.김혜빈 — 오늘 오후 1:34
chartJS로 데이터 분석한 값을 보여줄 수도 있을까요?
data 값을 직접 넣어서 그려서요!
분석은 어떤걸로 하나요?
아하
넵 감사합니당
(강사) 이호준 - Licat — 오늘 오후 1:37
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>chartJS</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <canvas id="one"></canvas>
                </div>
                <div class="col-md-6">
                    <canvas id="two"></canvas>
                </div>
                <div class="col-md-6">
                    <canvas id="three"></canvas>
                </div>
                <div class="col-md-6">
                    <canvas id="four"></canvas>
                </div>
            </div>
        </div>
        <script>
            const labels = ["1월", "2월", "3월", "4월", "5월", "6월"];
            const data1 = {
                labels: labels,
                datasets: [
                    {
                        label: "월별 매출액 현황(억원)",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [0, 2, 5, 2, 4, 2],
                    },
                ],
            };
            const data2 = {
                labels: labels,
                datasets: [
                    {
                        label: "월별 매출액 현황(억원)",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [0, 2, 5, 2, 4, 2],
                    },
                ],
            };
            const data3 = {
                labels: labels,
                datasets: [
                    {
                        label: "월별 매출액 현황(억원)",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [0, 2, 5, 2, 4, 2],
                    },
                ],
            };
            const data4 = {
                labels: labels,
                datasets: [
                    {
                        label: "월별 매출액 현황(억원)",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [0, 2, 5, 2, 4, 2],
                    },
                ],
            };
            const config1 = {
                type: "line", //pie, line, doughnut, polarArea...
                data: data1,
                options: {},
            };
            const config2 = {
                type: "line", //pie, line, doughnut, polarArea...
                data: data2,
                options: {},
            };
            const config3 = {
                type: "line", //pie, line, doughnut, polarArea...
                data: data3,
                options: {},
            };
            const config4 = {
                type: "line", //pie, line, doughnut, polarArea...
                data: data4,
                options: {},
            };
            const one = new Chart(document.getElementById("one"), config1);
        </script>
    </body>
</html>
4. 김세원 — 오늘 오후 1:38
넵!
4. 김대엽 — 오늘 오후 1:38
넵
4. 한혜지 — 오늘 오후 1:38
넵
4. 양희지 — 오늘 오후 1:38
넵
4. 강풍윤 — 오늘 오후 1:38
네
4. 박시우 — 오늘 오후 1:39
하루에 10만건이요?!
와,,,
4. 김대엽 — 오늘 오후 1:39
와 ㅎㅎ
연습이라니
4.김혜빈 — 오늘 오후 1:39
ㅋㅋㅋㅋㅋㅋ
4. 한유진 — 오늘 오후 1:39
ㅋㅋㅋㅋㅋㅋㅋ
4. 김세원 — 오늘 오후 1:39
때리는 것만으로는 범죄가 아닌가요...?
4. 한유진 — 오늘 오후 1:40
뚜들겨 맞는곳,,
4. 김소영 — 오늘 오후 1:40
헉..
4. 김세원 — 오늘 오후 1:40
안잡히니까 하는건가..
4. 장희수 — 오늘 오후 1:40
헐,,
4. 김대엽 — 오늘 오후 1:40
아 ㅋㅋㅋㅋ
4. 한혜지 — 오늘 오후 1:40
와우...
4. 이재영 — 오늘 오후 1:40
와..
4. 김대엽 — 오늘 오후 1:41
재미있어요
4. 한유진 — 오늘 오후 1:41
오호
4.김혜빈 — 오늘 오후 1:41
오 꿀팁
4. 김소영 — 오늘 오후 1:41
오오...
4. 김세원 — 오늘 오후 1:42
ㅋㅋㅋㅋㅋㅋ
쌍따옴표
4. 백경현 — 오늘 오후 1:43
Boder
4. 권지혜 — 오늘 오후 1:43
r이 빠졌어요
4. 정수현_2 — 오늘 오후 1:44
border
입니다
4. 김대엽 — 오늘 오후 1:44
괜찮습니다!!
4. 장희수 — 오늘 오후 1:44
ㅎㅎㅎ
4. 권지혜 — 오늘 오후 1:44
:1_ok:
4. 방현영 — 오늘 오후 1:46
오오
(강사) 이호준 - Licat — 오늘 오후 1:47
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
확장
message.txt
5KB
4. 한유진 — 오늘 오후 1:48
오홍
4. 김대엽 — 오늘 오후 1:50
넵
4.김혜빈 — 오늘 오후 1:50
넵
4. 이준근 — 오늘 오후 1:50
범주
4. 김대엽 — 오늘 오후 1:50
범례
4. 김태수 — 오늘 오후 1:50
전설...
4. 이준근 — 오늘 오후 1:50
범례 ㅎㅎ..
멋쟁이사자처럼 봇
봇
 — 오늘 오후 1:50
쉬는 시간입니다! 10분 뒤 정각에 뵙겠습니다 😉
이미지
멋쟁이사자처럼 봇
봇
 — 오늘 오후 2:00
QR 체크 시간입니다!

🔽HRD-net 앱을 이용해주세요
이미지
(강사) 이호준 - Licat — 오늘 오후 2:06
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
확장
message.txt
6KB
4. 김세원 — 오늘 오후 2:12
가장자리가 뭔가 뿌연?느낌이 있는데 원래 그런건가요?
네네
4. 손혜수 — 오늘 오후 2:13
스크립트로 width 를 제어하니까 뿌연느낌이 없어졌어요
canvas.width = 1000;
canvas.height = 1000;
4. 김세원 — 오늘 오후 2:13
크기 커지면 흐려지더라구용
4. 박시우 — 오늘 오후 2:15
https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5

요약하면 canvas의 width height 프로퍼티랑 css 스타일 width height랑은 다르대요!
Stack Overflow
Canvas width and height in HTML5
Is it possible to fix the width and height of an HTML5 canvas element?

The usual way is the following :

<canvas id="canvas" width="300" height="300"></canvas>
이미지
4. 강풍윤 — 오늘 오후 2:16
width 및 height 속성을 지정하지 않으면 캔버스의 처음 너비는 300 픽셀이고 높이는 150 픽셀입니다

https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage#:~:text=width%20%EB%B0%8F%20height%20%EC%86%8D%EC%84%B1%EC%9D%84,%EB%A7%9E%EA%B2%8C%20%ED%81%AC%EA%B8%B0%EA%B0%80%20%EC%A1%B0%EC%A0%95%EB%90%A9%EB%8B%88%EB%8B%A4.
캔버스(Canvas) 기본 사용법 - Web API | MDN
HTML 엘리먼트를 살펴보는 것으로 이 튜토리얼을 시작해 보겠습니다. 이 페이지의 끝에서 캔버스 2D 컨텍스트를 설정하는 방법을 알게되고, 여러분의 브라우저에서 첫 번째 예제를 그리게 될 것입니다.
캔버스(Canvas) 기본 사용법 - Web API | MDN
4. 김세원 — 오늘 오후 2:17
오왕
4. 정수현_2 — 오늘 오후 2:17
오
4.김혜빈 — 오늘 오후 2:17
우와,,,
4. 장희수 — 오늘 오후 2:17
우와,,
4. 강풍윤 — 오늘 오후 2:17
우와
4. 한유진 — 오늘 오후 2:17
우왓
4. 김세원 — 오늘 오후 2:17
완전 디발자
4. 이정호 — 오늘 오후 2:17
와
4. 김세원 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋ
4. 이정호 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
4.김혜빈 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋㅋㅋ
4. 장희수 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋ
4. 김도영 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋㅋㅋ,,,
4. 조민지 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋㅋ
4. 방선아 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
4. 김소영 — 오늘 오후 2:18
ㅋㅋㅋㅋㅋㅋ
4. 한유진 — 오늘 오후 2:20
오..
4. 김세원 — 오늘 오후 2:20
우와
4. 조민지 — 오늘 오후 2:21
오오
4.김혜빈 — 오늘 오후 2:21
와
4. 양희지 — 오늘 오후 2:21
오오
4. 장희수 — 오늘 오후 2:21
우와!!
4. 김대엽 — 오늘 오후 2:21
오오
4.김혜빈 — 오늘 오후 2:21
:wow~1:
4. 박시우 — 오늘 오후 2:21
대박
4. 양희지 — 오늘 오후 2:21
크으
(강사) 이호준 - Licat — 오늘 오후 2:23
// livecorona 사회적거리두기 시뮬레이터

// <canvas class="canvas" width="800" height="400"></canvas>

(function () {
    let clicked_btn = false; // 버튼 중복 클릭 방지
확장
message.txt
10KB
4. 김세원 — 오늘 오후 2:26
와..
(강사) 이호준 - Licat — 오늘 오후 2:27
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
2D breakout game using pure JavaScript - Game development | MDN
In this step-by-step tutorial we create a simple MDN Breakout game written entirely in pure JavaScript and rendered on HTML .
2D breakout game using pure JavaScript - Game development | MDN
4. 정수현_2 — 오늘 오후 2:28
코드공유 가능할까요 080
(강사) 이호준 - Licat — 오늘 오후 2:28
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Gamedev Canvas Workshop - lesson 10: finishing up</title>
        <style>
확장
message.txt
8KB
4. 장희수 — 오늘 오후 2:28
078도 부탁드려요..!!!
(강사) 이호준 - Licat — 오늘 오후 2:29
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
    </head>
    <body>
        <!-- https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5 -->
        <canvas id="canvas"></canvas>
        <script>
            const canvas = document.getElementById("canvas");
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext("2d");

            ctx.fillStyle = "green";
            // x, y, w, h
            ctx.fillRect(10, 10, 100, 200);

            // 그림을 그려주는 함수
            function 사각형(ctx) {
                let x = 10,
                    y = 50,
                    w = 100,
                    h = 100;
                ctx.fillStyle = "blue";
                ctx.fillRect(x, y, w, h);
            }

            function 삼각형(ctx) {
                ctx.beginPath();
                ctx.moveTo(75, 50);
                ctx.lineTo(100, 75);
                ctx.lineTo(100, 25);
                ctx.fillStyle = "red";
                ctx.fill();
            }

            사각형(ctx);
            삼각형(ctx);
        </script>
    </body>
</html>
4. 김세원 — 오늘 오후 2:30
🔥
(강사) 이호준 - Licat — 오늘 오후 2:31
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
확장
message.txt
8KB
4. 정수현_2 — 오늘 오후 2:32
성공?
4. 강풍윤 — 오늘 오후 2:32
성공이요 
﻿
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>로그인 페이지</title>
    </head>
    <body>
        <script>
            const userdb = [
                {
                    _id: "61b05e53210fb3490155afb2",
                    id: "Lisa",
                    pw: "b4cfaa5b-4040-4d57-adda-75a2cdb6e7f6",
                    index: 0,
                    picture: "http://placehold.it/32x32",
                    age: 28,
                    eyeColor: "brown",
                    name: "Salazar Shaw",
                    gender: "male",
                    company: "ISOLOGICA",
                    email: "salazarshaw@isologica.com",
                    phone: "+1 (837) 518-3132",
                    address: "983 Campus Place, Soudan, Idaho, 5633",
                    grade: "관리자",
                },
                {
                    _id: "61b05e5325386480dc41a388",
                    id: "Mabel",
                    pw: "46e6b380-367b-4780-b102-902030d2357b",
                    index: 1,
                    picture: "http://placehold.it/32x32",
                    age: 26,
                    eyeColor: "brown",
                    name: "Hoover Tyler",
                    gender: "male",
                    company: "DOGNOSIS",
                    email: "hoovertyler@dognosis.com",
                    phone: "+1 (988) 586-2470",
                    address: "305 Imlay Street, Ypsilanti, Connecticut, 125",
                    grade: "실버",
                },
                {
                    _id: "61b05e534a1657233781138a",
                    id: "Bauer",
                    pw: "6372e899-2d2c-4cd4-a9ca-a1d056894b21",
                    index: 2,
                    picture: "http://placehold.it/32x32",
                    age: 21,
                    eyeColor: "blue",
                    name: "Maritza Hanson",
                    gender: "female",
                    company: "ISOPOP",
                    email: "maritzahanson@isopop.com",
                    phone: "+1 (875) 573-2894",
                    address: "425 Dare Court, Advance, Missouri, 1322",
                    grade: "골드",
                },
                {
                    _id: "61b05e538b3ca85b0b294432",
                    id: "Cheryl",
                    pw: "37685cae-8716-47f6-b6f1-3c88c3edaa42",
                    index: 3,
                    picture: "http://placehold.it/32x32",
                    age: 22,
                    eyeColor: "brown",
                    name: "Cabrera Ruiz",
                    gender: "male",
                    company: "GOLISTIC",
                    email: "cabreraruiz@golistic.com",
                    phone: "+1 (811) 409-3405",
                    address: "464 Grant Avenue, Broadlands, Rhode Island, 8951",
                    grade: "실버",
                },
                {
                    _id: "61b05e53dabfe56a97e083b1",
                    id: "Lauren",
                    pw: "7812d059-f1a8-419d-956d-153cff1522ee",
                    index: 4,
                    picture: "http://placehold.it/32x32",
                    age: 33,
                    eyeColor: "green",
                    name: "Rivera Munoz",
                    gender: "male",
                    company: "MEGALL",
                    email: "riveramunoz@megall.com",
                    phone: "+1 (812) 598-2369",
                    address: "860 George Street, Brownlee, Oklahoma, 5164",
                    grade: "실버",
                },
                {
                    _id: "61b05e53cc219b458f42e0e5",
                    id: "Emerson",
                    pw: "22626beb-46f2-43b9-be64-2fbaf4874b6d",
                    index: 5,
                    picture: "http://placehold.it/32x32",
                    age: 39,
                    eyeColor: "brown",
                    name: "Diana Simpson",
                    gender: "female",
                    company: "AQUOAVO",
                    email: "dianasimpson@aquoavo.com",
                    phone: "+1 (805) 509-3533",
                    address: "289 Wolf Place, Jessie, Nevada, 4775",
                    grade: "다이아몬드",
                },
                {
                    _id: "61b05e53b19b300b847a81f7",
                    id: "hojun",
                    pw: "1234",
                    index: 6,
                    picture: "http://placehold.it/32x32",
                    age: 25,
                    eyeColor: "green",
                    name: "Cobb Mcfadden",
                    gender: "male",
                    company: "JUMPSTACK",
                    email: "cobbmcfadden@jumpstack.com",
                    phone: "+1 (965) 517-2000",
                    address: "155 Ryder Street, Ruffin, Louisiana, 6528",
                    grade: "관리자",
                },
                {
                    _id: "61b05e53c9deb83252fc7f75",
                    id: "Baker",
                    pw: "dd20c5f8-b5ce-444c-9bcd-9a6c5c481ad0",
                    index: 7,
                    picture: "http://placehold.it/32x32",
                    age: 38,
                    eyeColor: "blue",
                    name: "Richardson Ferguson",
                    gender: "male",
                    company: "TERASCAPE",
                    email: "richardsonferguson@terascape.com",
                    phone: "+1 (990) 516-2175",
                    address:
                        "123 Hale Avenue, Eggertsville, North Carolina, 115",
                    grade: "골드",
                },
            ];

            class GetUserData {
                login(아이디, 비밀번호, 성공, 실패) {
                    const data = userdb.find(
                        (user) => user.id === 아이디 && user.pw === 비밀번호
                    );
                    if (data) {
                        성공(아이디);
                    } else {
                        실패(new Error("로그인 실패!"));
                    }
                }
                getUserDataSet(이용자, 성공, 실패) {
                    const data = userdb.find((user) => user.id === 이용자);
                    if (data) {
                        성공({
                            id: data.id,
                            picture: data.picture,
                            name: data.name,
                            company: data.company,
                            email: data.email,
                            grade: data.grade,
                        });
                    } else {
                        실패(new Error("데이터 베이스 로드 실패!"));
                    }
                }
            }

            const userData = new GetUserData();
            const id = "hojun1";
            const pw = "1234";
            userData.login(
                id,
                pw,
                (userID) => {
                    userData.getUserDataSet(
                        userID,
                        (userBasicInfo) => {
                            // grade에 따른 콜백을 하나 더 넣어줄 수 있습니다.
                            console.log(userBasicInfo);
                        },
                        (실패) => {
                            console.log(실패);
                        }
                    );
                },
                (실패) => {
                    console.log(실패);
                }
            );
        </script>
    </body>
</html>