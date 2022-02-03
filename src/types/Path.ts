import { 
    CART_PATH,
    PRODUCT_DETAILS_PATH,
    SIGN_IN_PATH, 
    SIGN_UP_PATH,
    STORE_PATH,
    SORT_BY_CATEGORY_PATH,
    WISHLIST_PATH,
} from './../routes/paths';

export type Path = 
    | typeof CART_PATH
    | typeof PRODUCT_DETAILS_PATH
    | typeof SIGN_IN_PATH
    | typeof SIGN_UP_PATH
    | typeof STORE_PATH
    | typeof WISHLIST_PATH
    | typeof SORT_BY_CATEGORY_PATH;