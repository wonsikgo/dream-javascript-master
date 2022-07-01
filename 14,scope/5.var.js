/* 
    var의 특징
    
    코드의 가독성과 유지보수성에 좋지 않음

    1. 변수 선언하는 키워드 없이 선언 할당이 가능하다.

        - 선언인지 재할당인지 구분하기 어렵다.

    2. 중복 선언이 가능하다.

        - 에러가 발생할 확률이 높다.

    3. 블록 레벨 스코프 적용이 안된다.

    4. 함수 레벨 스코프만 지원이 된다.
*/

someting = "😎";
console.log(someting);

var poo = "😎";
var poo = "😎";
console.log(poo);

var apple = "사과";
{
  var apple = "🍎";
  {
    var apple = "🍏";
  }
}
console.log(apple);

function example() {
  var dog = "강아지";
}
console.log(dog);
