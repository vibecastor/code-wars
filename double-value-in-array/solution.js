const array = [1,2, 3, 4, 5];

function double(array) {
 array.map((val, i, array) => {
    console.log(val * 2);
  })
};
