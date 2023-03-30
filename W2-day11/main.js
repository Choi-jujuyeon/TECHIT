const QUOTES = "quotes";

function getTime() {
    const time = document.querySelector(".time");
    const Tdate = new Date();

    const hours = Tdate.getHours();
    const min = Tdate.getMinutes();
    const sec = Tdate.getSeconds();

    // hours.stye.color = "blue";
    //01.
    // if (sec.toString().length === 1) {
    //     sec = "0" + sec;
    // }

    //알람넣기 기능////////왜 작동이ㅣ. 안되냐ㅜㅋㅋㅋㅋㅋㅋㅋ///////////////////////////////////////
    function playAudioOnHour() {
        console.log(min);
        console.log(sec + "초");
        // if (min === 30 && sec === 30) {
        if (hours < 24 && min === 0) {
            console.log("오디오");
            var audio = document.getElementById("myAudio");
            audio.play();

            console.log("오디오");
        }
    }
    playAudioOnHour();
    console.log(sec + "ssssss초");

    //clearInterval(setInterval(playAudioOnHour, 1000));

    ///////////////////////////////////////////////////
    //seconds < 10

    /*02. Alt+shift+방향키
    const hours = String(Tdate.getHours()).padStrat(2,"0");
    const min = String(Tdate.getMinutes()).padStart(2,"0");
    const sec = String(Tdate.getSeconds()).padStart(2,"0");

    */

    // time.innerText = <spans>hours</spans> + "H " + min + "M " + sec + "s";
    // time.innerText = `${hours}H ${min}M ${sec}s`;

    // time.innerHTML = <span class="H">`${hours}`</span>+"H "+ <span>`${minutes}`</span>+"M"+<span>`${seconds}`</span>+"s "+`;

    time.innerHTML = `<span id="H">${hours}</span>H <span id="M">${min}</span>M<span id="S">${sec}</span>S`;
}

getTime();
setInterval(getTime, 1000);

// setInterval(() => {
//     console.log("setInerval");
// }, 1000);
function getQuotes() {
    const quotesMsg = document.querySelector(".quotesMsg");
    let savedQuotes = localStorage.getItem(QUOTES);

    if (!savedQuotes) {
        localStorage.setItem(
            QUOTES,
            JSON.stringify([
                "열심히 살지맙시다.",
                "그래도 열심히 살아야지.",
                "열심히 살면 뭐해~",
                "열심히 살면 반드시 빛이 온다.",
            ])
        );

        savedQuotes = localStorage.getItem(QUOTES);
    }

    let quotesArray = JSON.parse(savedQuotes);

    quotesMsg.innerText =
        quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();

function onClickAdd() {
    const newQuotes = document.querySelector(".newQuotes");

    newQuotes.style.display = "inline-block";
}

function onClickRegist() {
    const quotesMsg = document.querySelector(".quotesMsg");
    const newQuotes = document.querySelector(".newQuotes");
    const newQuotesInput = document.querySelector(".newQuotesInput");

    // input태그에 비어있는지 체크하는 구문
    if (!newQuotesInput.value) {
        return;
    }

    //input 태그 안에 값이 채워져 있음을 의미한다.

    let savedQuotes = localStorage.getItem(QUOTES);

    let quotesArray = JSON.parse(savedQuotes);
    quotesArray.push(newQuotesInput.value);

    //
    localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

    quotesMsg.innerHTML = `<span style="color:red;">${newQuotesInput.value}</span>`;
    newQuotes.style.display = "none";
}
/* 파싱 작업하기

    step1. 배열 생성해보기

            => let b = JSON.stringfy(a);

    step2. 만든 배열을 문자열로 만들어주기

*/

// localStorage은 배열로 저장하면 안됌 == text로 저장해야 한다.
//콘솔창에서 실습
// let a =["안녕하세요","반가워요", "HI"];

// console.log(a);

//json 명령어 = 배열을 문자열화 할 수 있다
// let b = JSON.string
// 1.배열을 만든다
// 2.let b = JSON.stringify(a); 문자열화 한다.
// 3.let c = JSON.parse(b); 파싱한다.

/////////////////////////////////

/*html을 통해서 값을 받아온다!
const a ={
    question:"질문입니다.",
};
const b ={
    question: question,
};
//키값과 value가 동일할 경우 생략이 가능하다 
const c ={
    question,
};

*/ /////////////////////////////////

let isLoading = false;

//CHATGPT 기능 만들기 !
async function onClickSearch() {
    const searchInput = document.querySelector(".searchInput");
    const searchResult = document.querySelector(".searchResult");

    // 값을 입력했을 때 콘솔창에서 그 값을 출력하고 싶은 상황
    // console.log(searchInput.value);
    // 만약 입력 값이 없으면 return을 하도록 설정
    if (!searchInput.value) return;

    if (isLoading) return;
    //여기까지 오면 isLoading = false라는 것을 의미한다
    isLoading = true;

    // 검색을 했을 경우 -> text창에 검색중이라는 문구를 적을 것이다
    //const로 정의한 변수는 값을 변경할 수 없다!
    //question에는 실제 질문에 대한 답이 들어가 있다.
    const question = searchInput.value;
    searchInput.value = "검색 중입니다 ... 잠시만 기다려주세요!";

    // 프론트엔드 ~> 백엔드로 보내는 코드
    // json 형식으로 오는 것이다
    const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        {
            question,
        },
        {
            // 헤더 만들기
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer BLOCKCHAINSCHOOL3",
            },
        }
    );
    if (response.status === 200) {
        searchResult.style.display = "inline";
        searchResult.innerText = response.data.choices[0].message.content;
    }

    searchInput.value = "";
    isLoading = false;
}
function onClickToggle(value) {
    const nft = document.querySelector(".nft");
    const nftview = document.querySelector(".nftView");

    if (value) {
        nft.style.display = "inline-block";
        nftview.style.display = "none";
    } else {
        nft.style.display = "none";
        nftview.style.display = "inline-block";
    }
}

// 날씨 api 할때 확이낳는 방법 == Ajax가 JQuery dptj 나온 것일것이다 ㅋ
// fetch  ~~> 내일 사용할거임
//https://axios-http.com/kr/docs/intro ~> 이거 사용해서 백엔드와 통신을 한다는 데?

// axios 사용이 잘 되는지 체크해보기
// console.log(axios);

// 날씨 정보 넣어주는 역할///////////////////////////////
const API_KEY = "9644a967875c09c9fbc66e88fde38243";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
    (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                weatherTemp.innerText =
                    data.name + "," + parseInt(data.main.temp) + "°C";

                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                // weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            });
    },

    () => alert("Not allowed!")
);
////////////////////////////오디오 끄는 버튼 생성
const audioBtn = document.getElementById("audio-btn");
const myAudio = document.getElementById("myAudio");

// audioBtn.addEventListener("click", () => {
//     console.log("hello");
//     myAudio.pause();
// });

// audioBtn.addEventListener("click", () => {});

function audioOff() {
    console.log("hello");
    myAudio.pause();
    // myAudio.currentTime = 0;
}
