import { Product } from "../../../types/states/StoreState";

export const CLEAR_PRODUCT_ERROR = 'CLEAR_PRODUCT_ERROR';
export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCEEDED = 'GET_PRODUCTS_SUCCEEDED';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';


export type ActionType =   
    | { type: undefined } // Redux action requires <State, Action<any> = An action must be both exists and not in an object
    | { type: typeof CLEAR_PRODUCT_ERROR }
    | { type: typeof GET_PRODUCTS_START, payload: number | null }
    | { type: typeof GET_PRODUCTS_SUCCEEDED, payload: Product[] }
    | { type: typeof GET_PRODUCTS_FAILED, payload: any };