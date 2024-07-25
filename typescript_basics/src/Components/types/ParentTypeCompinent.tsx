import React, { useState } from "react";
import ChildTypeComponent from "./ChildTypeComponent";

export default function ParentTypeCompinent() {
  const [name, setName] = useState<string | null>();
  const [age, setAge] = useState<number>(1);
  
    const print=():void=>{
        console.log(name , age)
    }
  return <ChildTypeComponent name={name??""} age={age} print={print} />;
}
