import { WishListState } from "../../../types/states/WishlistState";
import { 
    ActionType, 
    TOGGLE_ADD_TO_WISHLIST_START,
    TOGGLE_ADD_TO_WISHLIST_SUCCEEDED,
    TOGGLE_ADD_TO_WISHLIST_FAILED,
    GET_WISHLIST_BY_USER_ID_START,
    GET_WISHLIST_BY_USER_ID_SUCCEEDED,
    GET_WISHLIST_BY_USER_ID_FAILED,
} from "./action.type";
import { toggleAddToWishList } from "./utils";

const initialState: WishListState = 
{
    wishList: {
        id: 0,
        user_id: 0,
        product_ids: []
    },
    wishLists: [],
    isLoading: false,
    error: undefined
};

const reducer = (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case TOGGLE_ADD_TO_WISHLIST_START:
        case GET_WISHLIST_BY_USER_ID_START:
            return {
                ...state,
                isLoading: true
            };

        case TOGGLE_ADD_TO_WISHLIST_SUCCEEDED:
            const { user, product } = action.payload;
            
            return {
                ...state,
                wishLists: toggleAddToWishList(state.wishLists, user.id, product.id),
                isLoading: false,
            };

        case GET_WISHLIST_BY_USER_ID_SUCCEEDED:
            return {
                ...state,
                wishlist: action.payload,
                isLoading: false
            };

        case TOGGLE_ADD_TO_WISHLIST_FAILED:
        case GET_WISHLIST_BY_USER_ID_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;