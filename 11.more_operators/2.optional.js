/* 
    옵셔널 체이닝 연산자 Optional Chaining Operator
    ES11 (ECMAscript 2020)
    node 버전 14이후 사용가능 
    ?. 
    null 또는 undefined을 확인할떄
*/

let item = { price: 1 };
const price = item?.price;
console.log(price);

const obj1 = { name: "😼", owner: { name: "wonsick" } };
const ownerName = obj?.owner?.name;
console.log(ownerName);
