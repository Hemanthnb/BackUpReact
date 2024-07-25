import { ProductsType } from "../../../types/productsType";
import apiClient from "../api.client"

const productEndpoints = {
    getProducts: async (signal:any): Promise<ProductsType[]> => {
        const response = await apiClient.get('/products',{signal});
        console.log("Status code ", response.status);
        const data = await response.data;
        // console.log("data ", data);

        return data
    }
}
export default productEndpoints;