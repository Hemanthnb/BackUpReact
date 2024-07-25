let str= "My name is Hemanth";

let arr=str.split(" ");

arr.reverse();
str="";
arr.map((ele)=>[
    str=str+ele+" "
])

console.log(str)