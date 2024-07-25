import { useEffect, useState } from "react"
import { ProductsType } from "../types/productsType"
import productEndpoints from "../config/api/endpoints/productEndpoints";

interface Products {
    loading: boolean,
    listOfProcucts: ProductsType[],
    error: string | null,
}

const useProductsAPI = (): Products => {
    const [products, setProducts] = useState<ProductsType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    // const[cancelrequest, setCancelRequest]= useState<boolean>(false)

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchProducts = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            try {
                const data = await productEndpoints.getProducts(signal);
                setProducts(data);
            } catch (err) {
                console.log(err);
                setError((err as Error).message);
                console.log("I am getting error");
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts();
        return () => { controller.abort() }
    }, [])
    return { loading, listOfProcucts: products, error };
}
export default useProductsAPI;