/* 
    퀴즈

    주어진 숫자만큼 0부터 순회하는 함수
    순회하면서 주어진 특정한 일을 수행해야 한다.

    ex) 5 순회하는 숫자를 다 출력하고 싶음
        5 순회하는 숫자의 두배값을 다 출력하고 싶음

*/

const print = (number) => {
  console.log(number);
};

const printDouble = (number) => {
  console.log(number * 2);
};
function iterate(max, action) {
  for (let i = 1; i <= max; i++) {
    action(i);
  }
}

iterate(5, print);
iterate(5, printDouble);

setTimeout(() => {
  console.log("콜백 테스트");
}, 1000);
