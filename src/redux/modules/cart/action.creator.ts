import { Cart } from "../../../types/states/CartState";
import { 
    ActionType,
    ClearUserCartPayload,
    CLEAR_USER_CART_START,
    CLEAR_USER_CART_SUCCEEDED,
    CLEAR_USER_CART_FAILED,
    GET_CARTS_START,
    GET_CARTS_SUCCEEDED,
    GET_CARTS_FAILED,
    AddToCartPayload,
    TOGGLE_ADD_TO_CART_START,
    TOGGLE_ADD_TO_CART_SUCCEEDED,
    TOGGLE_ADD_TO_CART_FAILED,
    TOGGLE_ADD_TO_CHECKOUT,
    TOGGLE_ADD_ALL_TO_CHECKOUT,
    ToggleAddToCheckoutPayload,
    ToggleAddAllToCheckoutPayload,
} from "./action.type";

export const clearUserCartStart = (payload: ClearUserCartPayload): ActionType => ({
    type:CLEAR_USER_CART_START,
    payload
});

export const clearUserCartSucceeded = (payload: ClearUserCartPayload): ActionType => ({
    type:CLEAR_USER_CART_SUCCEEDED,
    payload
});

export const clearUserCartFailed = (errorMessage: any): ActionType => ({
    type:CLEAR_USER_CART_FAILED,
    payload: errorMessage
});

export const getCartsStart = (): ActionType => ({
    type: GET_CARTS_START
});

export const getCartsSucceeded = (payload: Cart[]): ActionType => ({
    type: GET_CARTS_SUCCEEDED,
    payload
});

export const getCartsFailed = (errorMessage: any): ActionType => ({
    type: GET_CARTS_FAILED,
    payload: errorMessage
});

export const toggleAddToCartStart = (payload: AddToCartPayload): ActionType => ({
    type: TOGGLE_ADD_TO_CART_START,
    payload
});

export const toggleAddToCartSucceeded = (payload: AddToCartPayload): ActionType => ({
    type: TOGGLE_ADD_TO_CART_SUCCEEDED,
    payload
});

export const toggleAddToCartFailed = (errorMessage: any): ActionType => ({
    type: TOGGLE_ADD_TO_CART_FAILED,
    payload: errorMessage
});

export const toggleAddAllToCheckout = (payload: ToggleAddAllToCheckoutPayload): ActionType => ({
    type: TOGGLE_ADD_ALL_TO_CHECKOUT,
    payload
});

export const toggleAddToCheckout = (payload: ToggleAddToCheckoutPayload): ActionType => ({
    type: TOGGLE_ADD_TO_CHECKOUT,
    payload
});