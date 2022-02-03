import { WishList } from "../../../types/states/WishlistState";
import { 
    ActionType,
    TOGGLE_ADD_TO_WISHLIST_START,
    TOGGLE_ADD_TO_WISHLIST_SUCCEEDED,
    TOGGLE_ADD_TO_WISHLIST_FAILED,
    GET_WISHLIST_BY_USER_ID_START,
    GET_WISHLIST_BY_USER_ID_SUCCEEDED,
    GET_WISHLIST_BY_USER_ID_FAILED,
    AddToWishListPayload,
} from "./action.type";

export const toggleAddToWishListStart = (payload: AddToWishListPayload): ActionType => ({
    type: TOGGLE_ADD_TO_WISHLIST_START,
    payload
});

export const toggleAddToWishListSucceeded = (payload: AddToWishListPayload): ActionType => ({
    type: TOGGLE_ADD_TO_WISHLIST_SUCCEEDED,
    payload
});

export const toggleAddToWishListFailed = (errorMessage: any): ActionType => ({
    type: TOGGLE_ADD_TO_WISHLIST_FAILED,
    payload: errorMessage
});

export const getWishListByUserIdStart = (): ActionType => ({
    type: GET_WISHLIST_BY_USER_ID_START
});

export const getWishListByUserIdSucceeded = (userId: number): ActionType => ({
    type: GET_WISHLIST_BY_USER_ID_SUCCEEDED,
    payload: userId
});

export const getWishListByUserIdFailed = (errorMessage: any): ActionType => ({
    type: GET_WISHLIST_BY_USER_ID_FAILED,
    payload: errorMessage
});