// let arr=[1,2,3,4];

// arr.map((ele)=>{
//     console.log(ele);
// })

// arr=arr.filter(ele=>ele%2===0)

// console.log(arr);

// let str= "acceldata";

// let map= new Map();


// for(let char of str){
//     if(map.has(char)){
//         map.set(char,map.get(char)+1);
//     }
//     else{
//         map.set(char,1);
//     }
// }
// let max=0, ans='';
// map.forEach((value,key)=>{
//     if(value>max){  
//         max=value;
//         ans=key;
//     }
// })
// console.log(ans)


// function fib(n){
//     let num1=0, num2=1, temp=num2;
//     for(let i=0;i<n;i++){
//         if(i<1){
//             console.log(i)
//             continue;
//         }
//         temp=num1+num2;
//         num2=num1;
//         num1=temp;
//         console.log(temp);
//     }

// }

// let n=6;
// fib(n);

function abc(){
    return true
}

let promise= new Promise((resolve, reject)=>{

    let operation=abc();
    if(operation){
        resolve("The operation has successed");
    }
    else{
        reject("The operation has failed");
    }
})


promise.then((operationStatus)=>{
    console.log(operationStatus);
}).catch((operationStatus)=>{
    console.log(operationStatus);
})