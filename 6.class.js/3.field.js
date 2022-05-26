/* 
    필드
*/

// 접근 제어자 - 캡슐화
class Fruit {
  // constructor에서 인자로 받는 필드는 생략가능
  // #이 붙은 필드와 함수는 외부에서 접근이 불가능하다.
  #name;
  #emoji;
  // 인스턴스가 만들어질 때 초기화 할 수 있다.

  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display() {
    console.log(`${this.#name} ${this.#emoji}`);
  }
}

const apple = new Fruit("apple", "🍎");
// apple.#name = "orange";

console.log(apple);
