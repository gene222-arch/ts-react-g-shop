import { Product } from "../../../types/states/StoreState";
import { 
    ActionType,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCEEDED,
    GET_PRODUCTS_FAILED,
} from "./action.type";

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