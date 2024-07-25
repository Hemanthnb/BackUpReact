elementData = {
  type: "p",
  // attributes: [{ "background-color": "red" }, { "font-size": "16px" },{"color":"white"}],
  attributes: { "background-color": "red" ,"font-size": "16px","color":"white"},
  text: "Hello, this is a dynamically created element!",
};

createElement = () => {
  const element = document.createElement(this.elementData.type);
//   let cssProperty=''
const attributesArray = elementData.attributes;

// attributesArray.forEach(map => {
//   for(let key in map){  
//     element.style[key]=map[key];
//   }
// });

// attributesArray.forEach(key => {
//   console.log(`${key}: ${attributesArray[key]}`);
// });

for (const key in attributesArray) {
    console.log(`${key} : ${attributesArray[key]}`)
  }
// Iterate over each object in the attributes array


// attributesArray.forEach(attributeObj => {
  // Iterate over the keys and values of each object
//   for (let key in attributeObj) {
//     const value = attributeObj[key];
//     console.log(`Key: ${key}, Value: ${value}`);
//   }
// });

console.log('-----------------------------');

// let str=''
// for(let i=0;i<attributesArray.length;i++){
//       for(let key in attributesArray[i]){
//         const value = attributesArray[i][key];
//         str+=key+':'+value+';'
//       }
//   }
  

  // console.log(elementData.attributes)
  // console.log(cssProperty)
  // cssProperty+=`"`
  // element.setAttribute('style',str);

  element.textContent = this.elementData.text;
  return element;
}

function render() {
  console.log("My name is Hemanth ");
  const root = document.getElementById("root");
  const element = createElement(elementData);
  root.appendChild(element);
}

render();
