async function temp1(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched after 2 seconds from temp1 ');
        }, 2000);
    });
}

async function temp2(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched after 1 seconds temp2 ');
        }, 1000);
    });
}

async function main(){
    let res1=  await temp1();
    console.log(res1);
}

main()