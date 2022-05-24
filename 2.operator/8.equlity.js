/* 
    동등 비교 관계 연산잔 (Equlity Operators)
    == 값이 같음
    != 값이 다름
    === 값과 타입이 둘다 같음
    !== 값과 타입이 다름
*/

console.log(2 == 2); // true
console.log(2 != 3); // true
console.log(2 === "2"); // false
console.log(2 !== "2"); // true
console.log(2 == "2"); // true
console.log(2 === 2); // true

console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); // false 메모리 주소값을 비교
console.log(obj1 === obj2); // false 타입은 같으나 값 자체가 다르다.
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;

console.log(obj3 == obj2); // true 동일한 주소 값을 가지고 있다.
console.log(obj3 === obj2); // true
