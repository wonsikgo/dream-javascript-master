/* 
    재사용성을 높이는 방법

    - static 정적 프로퍼티, 메서드


*/

class Fruit {
  static MAX_FRUIT = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없다.
    return new Fruit("banana", "🍌");
  }
  // 인스턴스의 레벨의 메서드
  display() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

// ex) Math 클래스의 static pow 함수 호출
Math.pow();

// console.log(apple);
// console.log(orange);
// orange.display();
