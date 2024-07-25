function wish(callBack){
    callBack();
}

function callBackFunction(){
    console.log("I am call back")
}

wish(callBackFunction);

