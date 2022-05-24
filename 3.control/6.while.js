/* 
    while(조건) {}
    조건이 false가 될때까지 {} 코드를 반복 실행
*/

let num = 5;

while (num < 5) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;

// while (isActive) {
//   console.clear();
//   console.log("아직 살아있다!");
//   if (i === 3) {
//     break;
//   }
//   i++;
// }

// 조건이 맞지 않아도 do {} 는 한번은 무조건 실행한다.
do {
  console.log("do 첫번째 실행");
} while (isActive);
