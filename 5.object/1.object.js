/* 
    객체 (Object): 서로 연관있는 데이터(프로퍼티)와 행동(메소드)을 묶어 주기 위해 사용한다.

    - 밀접하게 관련있는 상태와 행동을 객체로 묶는다
    
    - Heap 메모리에 저장된다. 

    - 생성방법

        - Object Literal { key : value }
        - new Object();
        - Object.create();
        - key - 문자, 숫자, 문자열, 심볼
        - value - 원시값, 객체 (함수)
*/
let apple = {
  name: "apple",
  "hello-bye": "😀",
  ["hello-bye1"]: "😁",
  0: 1,
  helloBye: "😀", // 가능하면 이런식으로 정의하는게 좋다.
};

// 속성, 데이터에 접근하기 위한 방법
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple["hello-bye"]); // 대괄호 표기법 bracket notation
apple["name"];

// 동적으로 속성 추가가 가능
apple.emoji = "🤣";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);
