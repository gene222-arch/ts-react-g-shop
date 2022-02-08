import { Product, StoreState, Rating } from "../../../types/states/StoreState";
import { 
    ActionType, 
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCEEDED,
    GET_PRODUCTS_FAILED,
    CLEAR_PRODUCT_ERROR,
} from "./action.type";

const initialState: StoreState = 
{
    product: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        }
    },
    products: [],
    isLoading: false,
    error: undefined,
};

const reducer = (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case CLEAR_PRODUCT_ERROR:
            return {
                ...state,
                error: undefined
            };

        case GET_PRODUCTS_START:
            return {
                ...state,
                isLoading: true
            };

        case GET_PRODUCTS_SUCCEEDED:
            return {
                ...state,
                products: action.payload,
                isLoading: false
            };

        case GET_PRODUCTS_FAILED:
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