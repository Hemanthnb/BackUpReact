const func1 = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let index = 0; index < 50; index++) {
          console.log("Func1");
        }
        resolve(); // Resolve the promise after the loop completes
      }, 2000);
    });
  };
  
  const func2 = () => {
    for (let index = 0; index < 5; index++) {
      console.log("Func2");
    }
  };
  
  const func3 = () => {
    for (let index = 0; index < 5; index++) {
      console.log("Func3");
    }
  };
  
  async function main() {
     func1();
    func2();
    func3();
  }
  
  main();
  