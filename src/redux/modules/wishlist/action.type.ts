import { User } from "../../../types/states/AuthState";
import { Product } from "../../../types/states/StoreState";

export const TOGGLE_ADD_TO_WISHLIST_START = 'TOGGLE_ADD_TO_WISHLIST_START';
export const TOGGLE_ADD_TO_WISHLIST_SUCCEEDED = 'TOGGLE_ADD_TO_WISHLIST_SUCCEEDED';
export const TOGGLE_ADD_TO_WISHLIST_FAILED = 'TOGGLE_ADD_TO_WISHLIST_FAILED';
export const GET_WISHLIST_BY_USER_ID_START = 'GET_WISHLIST_BY_USER_ID_START';
export const GET_WISHLIST_BY_USER_ID_SUCCEEDED = 'GET_WISHLIST_BY_USER_ID_SUCCEEDED';
export const GET_WISHLIST_BY_USER_ID_FAILED = 'GET_WISHLIST_BY_USER_ID_FAILED';

export type AddToWishListPayload = {
    user: User,
    product: Product
};

export type ActionType =   
    | { type: undefined } // Redux action requires <State, Action<any> = An action must be both exists and not in an object
    | { type: typeof TOGGLE_ADD_TO_WISHLIST_START, payload: AddToWishListPayload }
    | { type: typeof TOGGLE_ADD_TO_WISHLIST_SUCCEEDED, payload: AddToWishListPayload }
    | { type: typeof TOGGLE_ADD_TO_WISHLIST_FAILED, payload: any }
    | { type: typeof GET_WISHLIST_BY_USER_ID_START }
    | { type: typeof GET_WISHLIST_BY_USER_ID_SUCCEEDED, payload: number }
    | { type: typeof GET_WISHLIST_BY_USER_ID_FAILED, payload: any };