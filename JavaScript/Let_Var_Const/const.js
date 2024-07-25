// console.log(a);
// console.log(obj);
const a = 100;

// a = 5; //will get eror as const variables are not mutable
console.log(a);

const obj = {
  name: "Hemanth",
  age: 23,
};

obj["age"] = 22; //even though it is const it is mutable
console.log(obj);

// if (true) {
//   console.log("from inside if ", a);
//   a = 200;
// }
// console.log(a);
