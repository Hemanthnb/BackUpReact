let ele=document.getElementById('result');
let count=0;
const increment=()=>{
    // console.log(ele);
    count++;
    ele.innerText=count;
    console.log(count);
}

const decrement=()=>{
    count--;
    ele.innerText=count
    console.log(count);
}