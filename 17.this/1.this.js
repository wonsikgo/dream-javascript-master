/* 
    This 자바스크립트는 문맥에 따라 가리키는것이 달라진다.

    런타임 상에서 동적으로 결정된다.

    글로벌 컨텍스트의 this
    
    - 브라우저 : window

    - 노드 : module
*/
const x = 0;
module.exports.x = x;
// console.log(this);
// console.log(globalThis);
// globalThis 생략가능
// globalThis.setTimeout()
// setTimeout()

/* 
    함수 내부에서의 this 는 globalThis

    use strict 모드에서는 undefined
*/

function fun() {
  console.log(this);
}

fun();

/* 
    생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킨다.
*/

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat("냐옹");
const cat2 = new Cat("미야옹");

cat1.printName();
cat2.printName();
