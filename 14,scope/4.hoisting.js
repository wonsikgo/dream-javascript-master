/* 
    Hoisting 호이스팅

    자바스크립트 엔지이 코드를 실행하기 전, 변수, 함수 클래스의 선언문을 끌어 올리는것을 말한다.

    변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮긴다.
*/

// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해준다.
// 함수의 선언문은 선언 이전에도 호추링 가능하다
print();

function print() {
  console.log("Hello");
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고
// 초기화는 안된다.
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생한다.

// console.log(hi);
// console.log(func1);
let hi = "hi";
let func1 = function () {};

// const cat = new Cat();
class Cat {}

let x = 1;

{
  console.log(x);
  let x = 2;
}
