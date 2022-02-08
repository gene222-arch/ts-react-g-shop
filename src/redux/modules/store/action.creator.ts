import { Product } from "../../../types/states/StoreState";
import { 
    ActionType,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCEEDED,
    GET_PRODUCTS_FAILED,
    CLEAR_PRODUCT_ERROR,
} from "./action.type";

export const clearProductError = () => ({
    type: CLEAR_PRODUCT_ERROR
});

export const getProductsStart = (limit: number | null = null): ActionType => ({
    type: GET_PRODUCTS_START,
    payload: limit
});

export const getProductsSucceeded = (payload: Product[]): ActionType => ({
    type: GET_PRODUCTS_SUCCEEDED,
    payload
});

export const getProductsFailed = (errorMessage: any): ActionType => ({
    type: GET_PRODUCTS_FAILED,
    payload: errorMessage
});