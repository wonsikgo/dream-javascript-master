/* 
    문자열 타입
*/

let string = "안녕하세요.";
string = `안녕!`;
console.log(string);
string = '"안녕!"';
console.log(string);

string = "안녕!\n반가워!\t방가방가";
console.log(string);

// 템플릿 리터럴 (Template Literal) ES6 이후 문법
let id = "철수";
let greeting = `안녕 난 ${id}야`;

console.log(greeting);
