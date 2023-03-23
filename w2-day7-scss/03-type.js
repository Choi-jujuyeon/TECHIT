let iAmProgrammer;
let iWantToBeaCoinRich;
let iHaveADream;

//조건문 적용
if (iAmProgrammer) {
    console.log("You're a good person ");
} else {
    console.log("BadGirl~!~!");
}

// 논리 연산자
const TRUE = true;
const FALSE = false;

// && AND
console.log(TRUE && TRUE);
console.log(TRUE && FALSE);
console.log(FALSE && TRUE);
console.log(FALSE && FALSE);

// || OR
console.log(TRUE || TRUE);
console.log(TRUE || FALSE);
console.log(FALSE || TRUE);
console.log(FALSE || FALSE);

// ! NOT
console.log(!TRUE);
console.log(!FALSE);

// 배열
var a = [1, 2, 3];

//자바스크립트의 에러 == 없는거에 대해서 에러알림이 안뜬다
console.log(a[3]);
//배열은 공통적인 요소를 사용한다.
const chains = [
    "mainnet",
    "polygon",
    "avalanche",
    "arbitrum",
    "gnosis",
    "bsc",
    "optimism",
    "fantom",
];

console.log(chains);

/////////object
const myProfile = {
    name: "JU",
    age: 23,
};
const UmyProfile = ["JU", "Programmer", 34];

myProfile.age = 18;
console.log(myProfile.age);
