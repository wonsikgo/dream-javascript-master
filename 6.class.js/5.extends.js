/* 
    extends 상속
*/
class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자!");
  }

  sleep() {
    console.log("잔다!");
  }
}

class Tiger extends Animal {}

class Dog extends Animal {
  constructor(color, ownerName) {
    // 부모의 생성자를 호출
    super(color);
    this.ownerName = ownerName;
  }

  // 오버라이딩 : 자식클래스에서 부모클래스의 메소드를 재정의하는것을 말한다.
  eat() {
    // 부모의 메소드를 호출
    super.eat();
    console.log("강아지가 먹는다.");
  }
  play() {
    console.log("놀자아");
  }
}

const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

const dog = new Dog("파랭이", "철수");
console.log(dog);
dog.eat();
dog.play();
