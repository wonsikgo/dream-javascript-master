/* 
    Spread 연산자, 전개구문
    모든 Interabled은 Spread 될 수 있다.
    순회가 가능한 모든 것들은 펼쳐 질 수 있다.
    func(...iterabled)
    [...iterabled]
    {obj}
    EcmaScript 2018에 출시됬다.

*/
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const result = add(...nums);
console.log(result);

// Rest Paramters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ["🍊", "🍓"];
const fruits2 = ["🍋", "🍌"];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, "🥝", ...fruits2];
console.log(arr);

// Object
const ellie = { name: "Ellie", age: 20, home: { address: "home" } };
const updated = {
  ...ellie,
  job: "s/w engineer",
};

console.log(updated);
