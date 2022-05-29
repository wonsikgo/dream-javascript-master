/* 

    퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
    단, 주어진 배열을 수정하지 않도록!
    input: ['🍌', '🍓', '🍇', '🍓']
    output: [ '🍌', '🥝', '🍇', '🥝' ]

    퀴즈2:
    배열과 특정한 요소를 전달받아,
    배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
    input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
    output: 2

    퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
    배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
    input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
    output: [ '🍌', '🍇' ]
*/

// 퀴즈1
const fruits1 = ["🍌", "🍓", "🍇", "🍓"];
function replace(fruits, from, to) {
  const replaced = Array.from(fruits);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const reuslt = replace(fruits1, "🍓", "🥝");
console.log(reuslt);

// 퀴즈2
const fruits2 = ["🍌", "🥝", "🍇", "🥝"];
function count(fruits, item) {
  let counter = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === item) {
      counter++;
    }
  }
  return counter;
}

const result2 = count(fruits2, "🥝");
console.log(result2);

const fruits3 = ["🍌", "🥝", "🍇"];
const fruits4 = ["🍌", "🍓", "🍇", "🍓"];
function output(fruits1, fruits2) {
  let temp = [];
  for (let i = 0; i < fruits1.length; i++) {
    if (fruits2.includes(fruits1[i])) {
      temp.push(fruits1[i]);
    }
  }
  return temp;
}

const result3 = output(fruits3, fruits4);
console.log(result3);
