/* 
    함수 선언문 
    function name() {}

    함수 표현식 (값으로 표현가능한것)
    const name = function() {}
    
*/

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

// 화살표 함수로 사용 가능
// 바로 리턴한다면 return과 {} 생략 가능
add = (a, b) => a + b;

console.log(add(2, 3));

// 생성자 함수 const object = new Function();

// 즉시 실행 함수 IIFE (Immedicately-Ivoked Function Expression)
// 정의하면서 바로 실행
(function run() {
  console.log("런");
})();
