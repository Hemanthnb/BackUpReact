let str1="Hemanth"
let str2="hameHtnn"
let map= new Map();

for(let char of str1){
    if(map.has(char)){
        map.set(char,map.get(char)+1);
    }
    else{
        map.set(char,1);
    }
}

for(let char of str2){
    if(map.has(char)){
        map.set(char,map.get(char)+1);
    }
    else{
        map.set(char,1);
    }
}
let flag= true;
map.forEach((value,key)=>{
    if(value%2!=0){
        flag=false;
        return;
    }
})

if(flag){
    console.log("It is a Anagram");
}else{
    console.log("It's not an Anagram");
}