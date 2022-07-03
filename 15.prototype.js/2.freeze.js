/* 
    Object.freeze 동결

    추가 x, 삭제 x, 쓰기 x, 속성 재정의 x

    단, 얕은 동결만 가능하다.
*/

const ellie = { name: "엘리" };
const dog = { name: "와우", emoji: "🐶", owner: ellie };

Object.freeze(dog);
dog.name = "멍멍";
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

// 한 단계 밑 객체는 동결되지 않는다.
ellie.name = "엘리얌";
console.log(dog);

/* 
    Object.seal 밀봉 

    값의 수정 O, 추가 X, 삭제 X, 속성 재정의 X
*/
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));

/*
    Object.preventExtensions

    확장금지
*/
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = "어흐응";
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
