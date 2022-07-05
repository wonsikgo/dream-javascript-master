/* 
    Quiz 

    프로토타입을 클래스로 변경
*/

// function Animal(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
// }

// Animal.prototype.printName = function () {
//   console.log(`${this.name} ${this.emoji}`);
// };

// function Dog(name, emoji, owner) {
//   Animal.call(this, name, emoji);
//   this.owner = owner;
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.play = () => {
//   console.log("같이 놀자용!");
// };

// function Tiger(name, emoji) {
//   Animal.call(this, name, emoji);
// }

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.hunt = () => {
//   console.log("사냥하자!");
// };
// const dog1 = new Dog("멍멍", "🐶", "엘리");
// dog1.play();
// dog1.printName();

// const tiger1 = new Tiger("어흥", "🐱");
// tiger1.printName();
// tiger1.hunt();

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }

  play() {
    console.log(`${this.owner} 같이 놀자용!`);
  }
}

class Tiger extends Animal {
  constructor(name, emoji) {
    super(name, emoji);
  }

  hunt() {
    console.log("사냥하자!");
  }
}

const dog1 = new Dog("멍멍", "🐶", "엘리");
dog1.play();
dog1.printName();

const tiger1 = new Tiger("어흥", "🐱");
tiger1.printName();
tiger1.hunt();
