/* 
    클래스 (Class): 객체를 생성할 수 있는 템플릿

    - 객체지향 프로그래밍 (Object-Oriented Programming)

    - 클래스에 의해 생긴 객체를 인스턴스라고 한다.

*/

// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name} ${this.emoji}`);
//   };

//   return this; // 생략가능
// }

class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
orange.display();

// obj는 객체익, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "ellie" };
