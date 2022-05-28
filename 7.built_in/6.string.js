/* 
    문자열 함수들
*/

const textObj = new String("Hello World!");
const text = "Hello World!";

console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.length);
console.log(text.indexOf("l")); // 2
console.log(text.lastIndexOf("l")); // 9

console.log(text.includes("tx")); // false
console.log(text.includes("h")); // false 대소문자를 구분함
console.log(text.includes("H")); // true

console.log(text.startsWith("He")); // true
console.log(text.endsWith("!")); // true

console.log(text.toLowerCase()); // 소문자 반환
console.log(text.toUpperCase()); // 대문자 반환

console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

const space = "        space ";
console.log(space.trim()); // 공백제거

const longText = "Get to the, point";

console.log(longText.split(" "));
console.log(longText.split(", ", 2));
