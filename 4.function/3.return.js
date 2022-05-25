/* 
    반환

    return을 함수 중간에 정의하면 함수가 종료된다.
    조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료할 수 있다.
*/

function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

function print(num) {
  if (num < 0) return;

  return num;
}

console.log(print(20));
console.log(print(-20));
