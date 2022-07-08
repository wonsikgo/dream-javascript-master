/* 
    자바스크립트의 함수는 만능 슈퍼맨!
    
    함수처럼 사용, 사용자 함수로 사용

    하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체)이 생성된다.
*/

const dog = {
  name: "Dog",
  play: () => {
    console.log("논다멍");
  },
};

dog.play();
const obj = new dog.play();
console.log(obj);

// ES6 이후
const cat = {
  name: "cat",
  play() {
    // 객체의 메서드 (오브젝트의 속한 함수)
    console.log("냐옹");
  },
};

cat.play();

// 생성자 함수로 사용할 수 없다.
// const obj2 = new cat.play();

/* 
    화살표 함수의 특징

    1. 문법이 깔끔하다.

    2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 않는다.)

    3. 함수 자체 arguments

    4. this에 대한 바인딩이 정적으로 결정된다.

        - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩된다.
*/
