// // If I use fetch 
let data={};
const val=fetch("data/listofmovies.json")
  .then((res) => res.json())
  .then((response) =>console.log(response));
  
  console.log(data);
  // console.log(val);
// console.log(val);
  // let data=val.then(data=>data)

