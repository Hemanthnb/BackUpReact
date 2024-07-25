let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);

arr.push(5);
console.log(arr);

//U cannot do like this
console.log(arr);
console.log(Math.min(1, 2, 3, 4));

const newAr = new Array(1, 2, 23, 4, 5, 6);
newArr = newAr.filter((ele) => ele !== 23);
console.log("After reemoveing ", newArr);
