/* 
    typeof: 데이터 타입을 확인
    값을 타입 문자열로 반환
*/

let variable;

variable = "";
console.log(typeof variable);

variable = 123; // 할당된 값에 따라 타입이 결정된다. 자바스크립트는 인터프리터 언어로 동적으로 변경된다.
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);
