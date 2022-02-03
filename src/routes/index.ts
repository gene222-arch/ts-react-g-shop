import { lazy } from "react";
import { Route } from "../types/Route";
import { CART_PATH, PRODUCT_DETAILS_PATH, SIGN_IN_PATH, SIGN_UP_PATH, SORT_BY_CATEGORY_PATH, STORE_PATH, WISHLIST_PATH } from "./paths";

const Cart = lazy(() => import('./../views/cart'));
const ProductDetail = lazy(() => import('./../views/product/ProductDetail'));
const SignIn = lazy(() => import('./../views/auth/SignIn'));
const SignUp = lazy(() => import('./../views/auth/SignUp'));
const Store = lazy(() => import('./../views/store'));
const SortByCategory = lazy(() => import('./../views/store/SortByCategory'));
const WishList = lazy(() => import('./../views/wishlist'));

export const authRoutes: Route[] = 
[
    {
        key: 'SignIn',
        path: SIGN_IN_PATH,
        name: 'Sign In',
        component: SignIn,
        isPrivate: false
    },
    {
        key: 'SignUp',
        path: SIGN_UP_PATH,
        name: 'Sign Up',
        component: SignUp,
        isPrivate: false
    }
];

export const mainRoutes: Route[] = 
[
    {
        key: 'Cart',
        path: CART_PATH,
        name: 'Cart',
        component: Cart,
        isPrivate: true
    },
    {
        key: 'Store',
        path: STORE_PATH,
        name: 'Store',
        component: Store,
        isPrivate: true
    },
    {
        key: 'SortByCategory',
        path: SORT_BY_CATEGORY_PATH,
        name: 'Sort By Category',
        component: SortByCategory,
        isPrivate: true
    },
    {
        key: 'WishList',
        path: WISHLIST_PATH,
        name: 'Wishlist',
        component: WishList,
        isPrivate: true
    },
    {
        key: 'ProductDetail',
        path: PRODUCT_DETAILS_PATH,
        name: 'Product Details',
        component: ProductDetail,
        isPrivate: true
    }
];