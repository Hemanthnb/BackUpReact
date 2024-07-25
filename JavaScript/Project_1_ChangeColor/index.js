Array.from(document.getElementsByTagName('button')).
forEach(element => {
    element.addEventListener('click',()=>{
        console.log(element.innerText);
        if(element.innerText==='Voilet'){
            document.body.style.backgroundColor='purple';
        }else{
            document.body.style.backgroundColor=element.innerText.toLowerCase();}
    })
});