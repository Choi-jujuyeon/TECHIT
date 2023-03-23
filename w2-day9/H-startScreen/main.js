const QUOTES = "quotes";

function getTime() {
    const time = document.querySelector(".time");
    const Tdate = new Date();

    const hours = Tdate.getHours();
    const min = Tdate.getMinutes();
    const sec = Tdate.getSeconds();

    // hours.stye.color = "blue";
    //01.
    if (sec.toString().length === 1) {
        sec = "0" + sec;
    }
    //seconds < 10

    /*02. Alt+shift+방향키
    const hours = String(Tdate.getHours()).padStrat(2,"0");
    const min = String(Tdate.getMinutes()).padStart(2,"0");
    const sec = String(Tdate.getSeconds()).padStart(2,"0");

    */

    // time.innerText = <spans>hours</spans> + "H " + min + "M " + sec + "s";
    // time.innerText = `${hours}H ${min}M ${sec}s`;

    // time.innerHTML = <span class="H">`${hours}`</span>+"H "+ <span>`${minutes}`</span>+"M"+<span>`${seconds}`</span>+"s "+`;

    time.innerHTML = `<span class="H">${hours}</span>H <span class="M">${min}</span>M<span class="S">${sec}</span>S`;
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
