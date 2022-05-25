/* 
    불변성 (Immutability): 상태가 변경되지 않도록 하는것

    함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.
    상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 한다.
    원시값 - 값에 의한 복사
    객체값 - 참조에 의한 복사 (메모리 주소)
*/
function display(num) {
  num = 5; // bad
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

// 참조에 의한 복사 예시
function displayObj(obj) {
  obj.name = "Bob"; // 전달된 외부 인자의 값을 내부에서 변경하면 안된다.
  console.log(obj);
}

const ellie = { name: "Ellie" };

displayObj(ellie);
console.log(ellie);

// 이름부터 변경하는 느낌을 주도록한다.
function changeObj(obj) {
  return { ...obj, name: "Bob" }; // 반환할떄는 새로운 오브젝트를 만든다.
}
