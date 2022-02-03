import { Product } from "./StoreState";

export type CartProduct = {
    product_id: number;
    quantity: number;
    product: Product,
    is_added_to_checkout: boolean
};

export type Cart = {
    id?: number | undefined;
    user_id: number;
    date: string;
    products: CartProduct[];
};

export type CartState = {
    cart: Cart,
    carts: Cart[],
    isLoading: boolean,
    error: any
};