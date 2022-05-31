/* 

    고차함수를 사용하여 첫번쨰 퀴즈의 문제 다시 풀이

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

    퀴즈 4
    5이상(보다 큰)의 숫자들의 평균
    const nums = [3, 16, 5, 25, 4, 34, 21];
*/

// 퀴즈1
const fruits1 = ["🍌", "🍓", "🍇", "🍓"];
function replace(fruits, from, to) {
  const replaced = Array.from(fruits);
  return replaced.map((fruit) => {
    if (fruit === from) {
      return to;
    } else {
      return fruit;
    }
  });
}

const reuslt = replace(fruits1, "🍓", "🥝");
console.log(reuslt);

// 퀴즈2
const fruits2 = ["🍌", "🥝", "🍇", "🥝"];
function count(fruits, item) {
  let counter = 0;
  fruits.forEach((fruit) => {
    if (fruit === item) counter++;
  });

  return counter;
}

const result2 = count(fruits2, "🥝");
console.log(result2);

// 퀴즈3
const fruits3 = ["🍌", "🥝", "🍇"];
const fruits4 = ["🍌", "🍓", "🍇", "🍓"];
function match(fruits1, fruits2) {
  return fruits1.filter((fruit) => fruits2.includes(fruit));
}

const result3 = match(fruits3, fruits4);
console.log(result3);

// 퀴즈4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
function average(arr) {
  return arr
    .filter((value) => value > 5)
    .reduce((avg, value, _, array) => {
      return avg + value / array.length;
    }, 0);
}

const result4 = average(nums);
console.log(result4);
