/* 
    불리언 타입

    - 참과 거짓
*/

let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

// 활용 예
// 보통 변수명에 is를 붙인다.
let isFree = true;
let isActivated = false;

// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);
