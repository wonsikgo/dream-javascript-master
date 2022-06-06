/* 
    퀴즈

    중첩 구조분해할당을 인자로 받는 함수 작성
*/

const prop = {
  name: "Button",

  styles: {
    size: 20,

    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
