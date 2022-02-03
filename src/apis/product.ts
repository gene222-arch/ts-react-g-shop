import { Product } from "../types/states/StoreState";
import axiosInstance from "../utils/axiosInstance"

export const index = async (limit: number | null): Promise<Product[]> => 
{
    const queryParam = limit ? `?limit=${ limit }` : '';

    return await axiosInstance()
        .get(`/${ queryParam }`)
        .then((response: { data: Product[] }) => response.data)
        .catch(error => Promise.reject(error.response.data));
}