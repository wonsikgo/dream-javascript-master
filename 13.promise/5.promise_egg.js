/* 
    Promise 함수
*/

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🥞`);
}

function getChicken() {
  // return Promise.resolve(`🥦 => 🐓`);
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
}

// fetchEgg('🐔')

// getChicken()
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));

getChicken()
  .catch(() => "🐔")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log());
