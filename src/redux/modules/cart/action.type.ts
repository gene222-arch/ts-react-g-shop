import { User } from "../../../types/states/AuthState";
import { Cart } from "../../../types/states/CartState";
import { Product } from "../../../types/states/StoreState";

export const CLEAR_USER_CART_START = 'CLEAR_USER_CART_START';
export const CLEAR_USER_CART_SUCCEEDED = 'CLEAR_USER_CART_SUCCEEDED';
export const CLEAR_USER_CART_FAILED = 'CLEAR_USER_CART_FAILED';
export const GET_CARTS_START = 'GET_CARTS_START';
export const GET_CARTS_SUCCEEDED = 'GET_CARTS_SUCCEEDED';
export const GET_CARTS_FAILED = 'GET_CARTS_FAILED';
export const TOGGLE_ADD_TO_CART_START = 'TOGGLE_ADD_TO_CART_START';
export const TOGGLE_ADD_TO_CART_SUCCEEDED = 'TOGGLE_ADD_TO_CART_SUCCEEDED';
export const TOGGLE_ADD_TO_CART_FAILED = 'TOGGLE_ADD_TO_CART_FAILED';
export const TOGGLE_ADD_TO_CHECKOUT = 'TOGGLE_ADD_TO_CHECKOUT';
export const TOGGLE_ADD_ALL_TO_CHECKOUT = 'TOGGLE_ADD_ALL_TO_CHECKOUT';

export type AddToCartPayload = {
    product: Product,
    quantity: number,
    user: User
};

export type ToggleAddToCheckoutPayload = {
    product: Product,
    user: User
};

export type ToggleAddAllToCheckoutPayload = {
    user: User
};

export type ClearUserCartPayload = {
    user: User
};

export type ActionType =   
    | { type: undefined } // Redux action requires <State, Action<any> = An action must be both exists and not in an object
    | { type: typeof CLEAR_USER_CART_START, payload: ClearUserCartPayload }
    | { type: typeof CLEAR_USER_CART_SUCCEEDED, payload: ClearUserCartPayload }
    | { type: typeof CLEAR_USER_CART_FAILED, payload: any }
    | { type: typeof TOGGLE_ADD_TO_CHECKOUT, payload: ToggleAddToCheckoutPayload }
    | { type: typeof TOGGLE_ADD_ALL_TO_CHECKOUT, payload: ToggleAddAllToCheckoutPayload }
    | { type: typeof TOGGLE_ADD_TO_CART_START, payload: AddToCartPayload }
    | { type: typeof TOGGLE_ADD_TO_CART_SUCCEEDED, payload: AddToCartPayload }
    | { type: typeof TOGGLE_ADD_TO_CART_FAILED, payload: any }
    | { type: typeof GET_CARTS_START }
    | { type: typeof GET_CARTS_SUCCEEDED, payload: Cart[] }
    | { type: typeof GET_CARTS_FAILED, payload: any };