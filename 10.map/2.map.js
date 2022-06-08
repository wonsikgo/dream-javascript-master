/* 
    Map [키, 값] 순서가 없다.

    키 keys : 유일해야한다.
    값 values : 중복가능

    Object와 유사하다.
*/

const obj1 = { name: "🍊", price: 8 };
const obj2 = { name: "🍋", price: 6 };
const map = new Map([
  ["key1", "🍊"],
  ["key2", "🍋"],
]);

console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has("key1"));
console.log(map.has("key2"));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get("key1"));
console.log(map.get("key2"));
console.log(map.get("key4"));

// 추가
map.set("key3", "🍇");
console.log(map);

// 삭제
map.delete("key3");

// 전부삭제
map.clear();

// 오브젝트와의 큰 차이점??
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는 유우" };
const obj = {
  [key]: milk,
};

console.log(obj);

// 1. map은 여러가지 내장함수를 사용할수 있다.
// 2. object[key]로 접근가능 map[key] 접근불가, map은 map.get(key)로 접근가능
const map2 = new Map([[key, milk]]);
console.log(map2);
