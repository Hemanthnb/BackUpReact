import { type } from 'os'
import React, { useState } from 'react'
type stateUpdation={
    setName:(name:string|null)=>void;
}

const ChildState:React.FC<stateUpdation>=({setName: update}):JSX.Element=> {
    const[nullValue, setNullValue]= useState<string|null>();
  return (
    <>
    <input type='text' placeholder='ttt' value={nullValue===null?'':nullValue}/>
    <button onClick={()=>update("Hemanth")}>click</button>
    </>
  )
}

export default ChildState;