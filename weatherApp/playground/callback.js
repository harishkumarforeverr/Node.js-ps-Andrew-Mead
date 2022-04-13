// const add = (a, b, callback) => {
//   setTimeout(() => {
//     return a + b;
//   }, 2000);
// };

// console.log(add(9, 2));

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(9, 3, (sum) => {
  console.log("sim : ", sum);
});
