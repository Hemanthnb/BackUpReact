import React, { useEffect, useState } from 'react'
import ChildState from './ChildState';

const ParentState:React.FC=():JSX.Element=> {
    const [name, setName]=useState<String|null>();

    useEffect(()=>{
        console.log('The name is ',name);
    },[name]);

  return (
    <ChildState setName={setName}/>
  )
}

export default ParentState;