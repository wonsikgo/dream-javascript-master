/* 
    객체 축약 버전

    key와 value를 가르키는 변수값이 같다면 축약가능
*/

const x = 0;
const y = 0;
const cordinate = { x: x, y: y };
const cordinate1 = { x, y };
console.log(cordinate);
console.log(cordinate1);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
