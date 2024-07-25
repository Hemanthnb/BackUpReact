const closureWithArg=(defaultCountValue)=>{
    let value=defaultCountValue;

    return{
        increment:(incrementBy)=>{
            value+=incrementBy;
        },
        decrement:(decrementBy)=>{
            value-=decrementBy;
        },
        getValue:()=>{
            console.log(value);
        }
    }
}

const closure= closureWithArg(2);
closure.increment(5);
closure.getValue();