/* 
    객체 Object 복합데이터 { key:value }

     - 객체는 메모리 Heap에 저장된다.

    값과 참조의 차이

     - 원시타입은 값이 복사되어 전달된다

     - 객체타입은 참조값(메모리주소, 래퍼런스)가 복사되어 전달됨
*/

let orange = {
  name: "orange",
  color: "orange",
  emoji: "🍊",
};

console.log(orange.name);
console.log(orange.emoji);

// copy by Referene
let apple = {
  name: "apple",
};

let grape = apple;

grape.name = "포도";
apple.name = "포도";

// 동일한 곳을 바라보고 있기 때문에 같이 수정된다.
console.log(apple);
console.log(grape);
