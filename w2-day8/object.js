// // 함수는 데이터를 처리하는 역할을 한다!
// function add() {
//     console.log(2 + 3);
// }
// function subtract() {
//     console.log(2 - 5);
// }
// function multiply() {
//     console.log(2 * 3);
// }
// function divide() {
//     console.log(5 / 4);
// }
// add();
// subtract();
// multiply();
// divide();

// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// function subtract(num1, num2) {
//     console.log(num1 - num2);
// }
// function multiply(num1, num2) {
//     console.log(num1 * num2);
// }
// function divide(num1, num2) {
//     console.log(num1 / num2);
// }
// add();
// subtract();
// multiply();
// divide();

// function add(num1, num2) {
//     return console.log(num1 + num2);
// }
// function subtract(num1, num2) {
//     return console.log(num1 - num2);
// }
// function multiply(num1, num2) {
//     return console.log(num1 * num2);
// }
// function divide(num1, num2) {
//     return console.log(num1 / num2);
// }
// // let result = divide(2, 3);
// // console.log(result);

const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    substract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    divide: function (num1, num2) {
        return num1 / num2;
    },
};
let result = calculator.add(3, 4);
console.log(result);
