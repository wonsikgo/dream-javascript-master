/* 
    Promise 병렬처리
*/
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("오렌지가 없다!"));
}

// 바나나와 사과를 함께 가지고 오기
getBanana()
  .then((banana) => getApple().then((apple) => [banana, apple]))
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log("all", fruits)
);

// Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 실행
Promise.race([getBanana(), getApple()]).then((fruit) =>
  console.log("race", fruit)
);

// 에러 포함
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);
