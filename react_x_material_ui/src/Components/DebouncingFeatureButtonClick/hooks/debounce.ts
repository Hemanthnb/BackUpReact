import { useEffect, useState } from "react"

const useDebounce = <T>(quantity: T, delay = 500): T => {

    const [debounce, setDebounce] = useState<T>(quantity);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(quantity);
        }, delay)

        return () => clearTimeout(timer);

    }, [quantity])

    return debounce;

}
export default useDebounce;