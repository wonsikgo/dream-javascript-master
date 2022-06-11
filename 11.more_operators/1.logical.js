/* 
    로지컬 연산자

    && 그리고
    || 또는
    단축평가: short-circuit evalutation
*/

const obj1 = { name: "🐶" };
const obj2 = { name: "😼", owner: "wonsick" };

if (obj1 && obj2) {
  console.log("둘다 true!");
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

// 활용 예
// && 는 앞 조건이 Truthy일때 && 뒤를 실행
// || 는 뒤 조건이 Falshy일때 || 뒤를 실행

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없다");
  }
  animal.owner = "바뀐주인!";
}

function makeNewOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 있다");
  }

  animal.owner = "새로운주인!";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

// obj1.owner || makeNewOwner(obj1);
// obj2.owner || makeNewOwner(obj2);
// console.log(obj1);
// console.log(obj2);

// nul 또는 undefined인 경우를 확인할떄
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter는 null과 undefined인 경우에만 사용가능
function print(message) {
  const text = message || "Hello";
  console.log(text);
}

print();
