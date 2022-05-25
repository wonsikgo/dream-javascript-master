/* 
    생성자 함수

    특정한 템플릿에 맞게 객체를 생성하기 위한 방법
*/

// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name} 🍎`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name} 🍊`);
//   },
// };

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} ${this.emoji}`);
  };

  return this; // 생략가능
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
