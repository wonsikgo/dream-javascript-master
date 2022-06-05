/* 
    구조 분해 할당 Desturctucre Assignment
    데이터 그룹화를 쉽게 만들 수 있다
*/

const fruits = ["🍊", "🍓", "🍋", "🍌"];
const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["apple", "🍅"];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const wonsik = { name: "wonsik", age: 20, job: "s/w engineer" };

function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}

display(wonsik);

const { name, age, job: occupation, pet = "강아지" } = wonsik;

console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);
