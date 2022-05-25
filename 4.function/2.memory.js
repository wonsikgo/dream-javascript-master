/* 
    함수와 메모리

    add는 함수가 저장된 메모리의 주소값을 가지고 있다.
    sum에 add를 할당하면 sum도 함수가 저장된 메모리의 주소값을 가지게 된다.
*/

function add(a, b) {
  return a + b;
}

const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
