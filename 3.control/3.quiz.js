/* 
    퀴즈!
    let num = 2;
    num의 숫가 짝수이면 👍, 홀수라면 👎을 출력
*/

let num = 2;
if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log("👎");
}

let emoji = num % 2 === 0 ? "👍" : "👎";
console.log(emoji);
