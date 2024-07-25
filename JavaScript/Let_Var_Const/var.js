// console.log(a);
console.log(obj);
var a = 100;

var obj = {
  name: "Hemanth",
  age: 23,
};

if (true) {
  console.log("from inside if ", a);
  a = 200;
}
console.log(a);


function exampleFunction() {
  if (true) {
      var functionScopedVar = 'I am function scoped';
  }
  console.log(functionScopedVar); // 'I am function scoped'
}
exampleFunction();
console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
