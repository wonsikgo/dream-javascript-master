/* 
    제너레이터: 
*/

// function makeIterable(initialValue, maxValue, callback) {
//   return {
//     [Symbol.iterator]() {
//       let num = initialValue;
//       return {
//         next() {
//           return { value: callback(num++), done: num > maxValue };
//         },
//       };
//     },
//   };
// }

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield 1 ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
console.log(multiple);
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
multiple.throw("Error!");

next = multiple.next();
console.log(next.value, next.done);
