import { Typography } from "@mui/material";
import React, { memo, useEffect } from "react";

interface props{
    search:string
}

function Products({search}:props) {
    
    useEffect(()=>{
        console.log("Product rendered! " + search);
    },[search])

  return <Typography variant="h3">{search}</Typography>;
}

export default memo(Products);
