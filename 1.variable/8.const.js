/* 
    let은 재할당 가능, 변경 가능

    const는 재할당이 불가능, 변경 가능
     - 상수
     - 상수변수 또는 변수
*/

const text = "hello";

// Assignment to constant variable. 상수인데 재할당하면 에러발생
// text = "hi";

console.log(text);

// 1. 상수 (상수는 대문자 문자 사이는 _ 로 네이밍한다.)
const MAX_FRUITES = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
let orange = {
  name: "orange",
  color: "orange",
  emoji: "🍊",
};

// 객체안에 속성은 변경가능하다.
orange.name = "apple";
console.log(orange);
