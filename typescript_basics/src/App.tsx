import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // let name: string = "hemanth";

  let age: number;
  // age="1"; Cannot assign string val to a int
  age = 1;

  let imNotRobot: boolean;

  let colors: string[];
  // colors=['blue','white',1] Cannot have int inside array of string
  colors = ["blue", "white", "saffron"];

  let arr: [number, string, Object];
  arr = [1, "hemanth", { key: 3 }];

  type Obj = {
    name: string;
    age?: number; //Thi will become optional
  };

  let person: Obj = {
    name: "hemanth",
  };
  let arrayOfPerson: Obj[] = [{ name: "hemanth" }, { name: "Defender" }];

  //In Js it is called union operator, where contact num can have type of number and string
  let contact: number | string;
  contact = "1234567890";
  contact = 1234567890;

  let anyType: any; // This can keep values of any type. This is not much recomended
  // So we have alternate for any that is unknown
  anyType = "hemanth";
  anyType = 1;
  anyType = { name: "Hemanth", age: 23 };
  // console.log(anyType);

  let unKnownType: unknown;
  unKnownType = 1;
  unKnownType = "hemanth";

  let addNumPrototype: (val1: number, val2: number) => number; //This is a function prototype
  addNumPrototype = (val1: number, val2: number): number => {
    //this is the function body
    return val1 + val2;
  };

  // console.log(addNumPrototype(1, 2.4));

  let addNum = (a: number, b: number): number => {
    return a + b;
  };
  // console.log(addNum(1, 2));

  //void vs never
  // Void may have a return tyoe of undefined means return the control, where never indicates it will never return any value instead it reaches to an unreachable endopoint
  const returnVoid = (name: string): void => {
    return;
  };

  //In TypeScript, a function with a return type of never indicates that the function never returns normally. This typically occurs when the function throws an error, enters an infinite loop,
  let returnNever = (name: string): never => {
    //The body of this function cannot have reachable(It should not gets fully executed) endpoint.
    while (true) {}
  };

  type student = {
    name: string;
    displayRank: (rank: number) => void;
  };

  interface studentInterface extends student {
    age: number;
    phno: string;
  }

  let q: studentInterface = {
    name: "hemanth",
    displayRank: (rank: number) => {
      console.log(`The rank is ${rank}`);
    },
    age: 23,
    phno: "1234567890",
  };

  console.log("Phno is " + q.phno);

  let r: student = {
    name: "Hemanth",
    displayRank: (rank: number) => {
      console.log(`The rank is ${rank}`);
    },
  };

  console.log(r.displayRank);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
