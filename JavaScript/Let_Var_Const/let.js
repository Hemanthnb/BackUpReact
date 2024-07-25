// console.log(a);
// console.log(obj);
let a = 100;

let obj = {
  name: "Hemanth",
  age: 23,
};

if (true) {
  console.log("from inside if ", a);
  a = 200;
}
console.log(a);

const temp = () => {
  if (true) {
    let name = "Hemanth";
  }
  console.log(name);
};

temp();
