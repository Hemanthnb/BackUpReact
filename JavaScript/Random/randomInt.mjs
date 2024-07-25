const getRandomNum=(min,max)=>{
    let val=Math.random();
    return val*(max-min)+65;
}

const getRandomAlpha=(size)=>{
    let str='';
    for(var i=0;i<size;){
        let randAscii= Math.round(getRandomNum(65,123));
        if(randAscii>=91 && randAscii<=96){
            continue;
        }
        str+=String.fromCharCode(randAscii);
        i++;
    }
    return str;
}

// console.log(getRandomAlpha());

document.getElementById('inputLength').addEventListener('input',(event)=>{
    document.getElementById('value').innerText=getRandomAlpha(event.target.value);
    console.log(getRandomAlpha(event.target.value));
})