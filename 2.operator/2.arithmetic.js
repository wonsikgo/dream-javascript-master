/* 
    산술연산자 (Arithmetic operator)
    + 더하기
    - 빼기
    * 곱하기
    / 나누기
    % 나머지
    ** 지수연산자
*/

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7 에서 추가
console.log(Math.pow(5, 2));

// + 연산자 주의점
let text = "두개의" + "문자열";
console.log(text);

text = "1" + 1;
console.log(text); // 숫자와 문자열을 더하면 문자열로 반환
