/* 
    스코프란? 식별자(변수, 함수, 클래스)가 유횬한 범위, 영역

    - 선언된 위치에 따라 유효 범위가 결정된다. 

    - 블럭 안의 변수는 블럭 안에서만 유효

    - 변수는 최대한 필요한 곳에서 정의

    - 코드 블럭 : {}, if() {}, for() {}. function() {}
*/

// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
{
  const a = "a";
  console.log(a);
}
// console.log(a);
const b = "b";

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
  const message = "Hello World";
  console.log(message);
}

// console.log(message);

// 함수 외부에서는 함수의 매개변수를 참조할 수 없다.
function sum(a, b) {
  console.log(a, b);
}

console.log(a, b);
