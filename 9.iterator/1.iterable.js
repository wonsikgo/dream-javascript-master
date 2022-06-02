/* 
    이터러블이란?

    순회가 가능한 이터레이션 프로토콜 (Iteration Protocol), 반복 순회 규격, 약속 인터페이스

    Iterable 프로토콜

    Iterator 프로토콜

    Iterable 하다는건! 순회가 가능하다는 것!
    [Symbol.Iterator](): Iterator;
    심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
    순회 가능한 객체이다 라는걸 알 수 있다.
    순회가 가능하면 무엇을 할수 있나? for...of, spread
*/

const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

// error: obj is not iterable
/* const obj = { 0: 1, 1: 2 };
for (const item of obj) {
  console.log(item);
} */

const iterator = array.values();
console.log(typeof iterator);
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

for (const item of iterator) {
  console.log(item);
}
