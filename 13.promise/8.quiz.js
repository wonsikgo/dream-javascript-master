/* 
    Promise를 async, await로 변경
*/

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("can not find 🐓"));
}

getChicken()
  .catch(() => "🐔")
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));

async function makeFriedEgg() {
  let chicken;
  try {
    try {
      chicken = await getChicken();
    } catch (error) {
      chicken = "🐔";
    }
    const egg = await getChicken(chicken);
    const fryEgg = await getChicken(egg);

    console.log(fryEgg);
  } catch (error) {
    console.log(error);
  }
}

// makeFriedEgg();
