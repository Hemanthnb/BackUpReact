let arr=[1,3,2,5,6,1,1,2,9,0,3];
let map= new Map();
for(let ele of arr){
    if(map.has(ele)){
        map.set(ele,map.get(ele)+1);
    }
    else{
        map.set(ele,1);
    }
}

map.forEach((value,key)=>{
    if(value>1){
        console.log(value);
    }
})