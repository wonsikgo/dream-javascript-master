/* 
    논리 연산자 logical Operators
    && 그리고
    || 또는
    ! 부정
    !! boolean값으로 변환
*/

let num = 8;

if (num >= 0 && num < 9) {
  console.log("그리고 실행");
}

if (num >= 0 || num < 9) {
  console.log("또는 실행");
}

if (num !== 9) {
  console.log("부정 실행");
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
