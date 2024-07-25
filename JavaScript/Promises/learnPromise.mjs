// Promises are the objects which represent conmpletion or failure of Asynchronus operation.
//Asynchronous operations are the one which can exculte simultaneously. ex fetch()

let promise = new Promise((resolve, reject) => {
  const operation = false;
  if (operation) {
    resolve("The operation was successfully executed");
  } else {
    reject("The opeartion was failure");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
