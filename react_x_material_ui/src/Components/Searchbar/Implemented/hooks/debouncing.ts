import { useEffect, useState } from "react";

export const useDebounce = <T>(searchItem: T, delay = 1000) => {

    const [debounced, setDebounce]=useState<T>(searchItem);
    
    useEffect(()=>{
        const timeOut=setTimeout(()=>{
            setDebounce(searchItem);
        },delay)
        return ()=> clearTimeout(timeOut);
    },[searchItem]);

    return debounced;
}