// innerhtml은 html처럼 태그를 사용할 수 있다.

// root.innerHTML = "<div class='main'>자바스크립트로 만드는 HTML!</div>";
// root.innerHTML = `<div class='main'>자바스크립트로 만드는 HTML!</div>`;

const root = document.querySelector("#root");

const mainElFrist = `<div class="main">`;
const mainElLast = `</div>`;

const titleElFirst = `<div class="title">`;
const titleElLast = `</div>`;

const ulElFirst = `<ul>`;
const ulElLast = `</ul>`;

const liElFirst = `<li>`;
const liElLast = `</li>`;

const titleContent = `리액트를 잘하려면?`;
const howToMasterReact = [`잘`, `해`, `보`, `면`, `됌`];

// map : 배열에서 사용하는 반복문이라고 생각하면 된다.
// howToMasterReact.map((v, i) => {
//     return v;
// });

const liArray = howToMasterReact.map((v, i) => {
    return `${liElFirst}${i + 1}. ${v}${liElLast}`;
});
console.log(liArray);

root.innerHTML =
    mainElFrist +
    titleElFirst +
    titleContent +
    titleElLast +
    ulElFirst +
    liArray +
    ulElLast +
    mainElLast;
