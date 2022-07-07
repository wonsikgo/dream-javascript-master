/* 
    클로저 Closures

    내부함수에서 외부함수의 스코프에 접근하는것을 말한다.
*/

const text = "hello";

function func() {
  console.log(text);
}

func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}

const func1 = outer();
func1();
