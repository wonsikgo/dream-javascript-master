/* 
    This의 정적 바인딩
*/

function Cat(name) {
  this.name = name;

  // 2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억한다.
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다 ${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  // this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = () => {
    console.log(`강아지의 이름을 출력한다 ${this.name}`);
  };
}

const cat = new Cat("나비");
const dog = new Dog("댕댕이");

cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();

cat.printName = dog.printName;
cat.printName();
