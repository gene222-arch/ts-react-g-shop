import { CartState } from "../../../types/states/CartState";
import { 
    ActionType,
    CLEAR_USER_CART_START,
    CLEAR_USER_CART_SUCCEEDED,
    CLEAR_USER_CART_FAILED,
    GET_CARTS_START,
    GET_CARTS_SUCCEEDED,
    GET_CARTS_FAILED,
    TOGGLE_ADD_TO_CART_START,
    TOGGLE_ADD_TO_CART_SUCCEEDED,
    TOGGLE_ADD_TO_CART_FAILED,
    TOGGLE_ADD_TO_CHECKOUT,
    TOGGLE_ADD_ALL_TO_CHECKOUT,
    CLEAR_CART_ERROR
} from "./action.type";
import { clearUserCart, toggleAddAllToCheckout, toggleAddToCart, toggleAddToCheckout } from "./utils";

const initialState: CartState = 
{
    cart: {
        id: 0,
        user_id: 0,
        date: "",
        products: []
    },
    carts: [],
    isLoading: false,
    error: undefined
};

const reducer = (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case CLEAR_USER_CART_START:
        case GET_CARTS_START:
        case TOGGLE_ADD_TO_CART_START:
            return {
                ...state,
                isLoading: true
            };

        case CLEAR_CART_ERROR:
            return {
                ...state,
                error: undefined
            };

        case CLEAR_USER_CART_SUCCEEDED:
            return {
                ...state,
                carts: clearUserCart(action.payload.user, state.carts),
                isLoading: false
            };

        case TOGGLE_ADD_TO_CART_SUCCEEDED:
            const { product, quantity, user }  = action.payload;

            return {
                ...state,
                isLoading: false,
                carts: toggleAddToCart(product, quantity, user, state.carts)
            };

        case TOGGLE_ADD_ALL_TO_CHECKOUT:
            return {
                ...state,
                carts: toggleAddAllToCheckout(action.payload.user, state.carts)
            };

        case TOGGLE_ADD_TO_CHECKOUT:
            return {
                ...state,
                carts: toggleAddToCheckout(action.payload.product, action.payload.user, state.carts)
            };

        case GET_CARTS_SUCCEEDED:
            return {
                ...state,
                products: action.payload,
                isLoading: false
            };

        case CLEAR_USER_CART_FAILED:
        case GET_CARTS_FAILED:
        case TOGGLE_ADD_TO_CART_FAILED:
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