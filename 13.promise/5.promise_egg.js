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
  return Promise.resolve(`🥦 => 🐓`);
}

// fetchEgg('🐔')

getChicken()
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg));
