import {hello} from './class1.mjs'
class callGreet{
    constructor(){
        this. instance=new hello();
    }
    callGreetClass=()=>{
        return this.instance.greet();
    }
}

const callGreetInstance=new callGreet();
var greetStr=callGreetInstance.callGreetClass();
console.log(greetStr);