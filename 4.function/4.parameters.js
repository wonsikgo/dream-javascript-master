/* 
    함수의 인자

    - 매개변수의 기본값을 정의하지 않으면 undefined

    - 매개변수 기본값 Default Parameters를 정의할 수 있다. 
      외부에서 Parameters가 넘어오지 않은 경우 사용된다
    
    - 매개변수의 정보는 함수 내부에서 접근이 가능하나 arguments에 저장된다.

*/

function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]);
  return a + b;
}

add(1, 2, 3);
add();

// - Rest 매개변수 Rest Parameters
// 몇개의 파라미터를 받을지 모를 때 사용할 수 있다.
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
