/* 
    함수: 특정한 일을 수행하는 코드의 집합

    함수 단위로 작은단위로 일들을 묶어나간다.
    수행하는 일을 잘 나타낼 수 있는 이름으로 네이밍한다.
    매개변수 이름도 의미있게 네이밍한다.

    함수도 객체이기 때문에 Heap 메모리에 저장된다.
*/

function add(num1, num2) {
  return num1 + num2;
}

const result = add(1, 2);

console.log(result);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = "김";
let firstName = "지수";

console.log(fullName(firstName, lastName));

let lastName2 = "박";
let firstName2 = "철수";

console.log(fullName(firstName2, lastName2));
