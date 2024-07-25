console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 5000);

fetch("url").then(() => {
  console.log("Fetch");
});

console.log("End");
