import { User } from "../../../types/states/AuthState";
import { Cart } from "../../../types/states/CartState";
import { Product } from "../../../types/states/StoreState";

export const clearUserCart = (user: User, carts: Cart[]): Cart[] =>
{
    const newCart = carts.map(cart => 
    {
        if (cart.user_id === user.id) {
            return {
                ...cart,
                products: []
            };
        }   

        return cart;
    });

    return newCart;
};

export const toggleAddToCart = (product: Product, quantity: number, user: User, carts: Cart[]): Cart[] => 
{
    const isAddedToCheckOut = false;

    if (! carts.length) 
    {
        const userCart = [
            {
                id: Date.now(),
                user_id: user.id,
                date: Date.now().toString(),
                products: [
                    {
                        product_id: product.id, 
                        quantity,
                        product,
                        is_added_to_checkout: isAddedToCheckOut
                    }
                ],
            }
        ];

        return userCart;
    }

    return carts.map(cart => 
    {
        if (cart.user_id === user.id)
        {
            const isProductAdded = cart.products.find(prod => prod.product_id === product.id);

            if (isProductAdded) {
                return ({
                    ...cart,
                    products: cart.products.filter(prod => prod.product_id !== product.id)
                });
            }

            return ({
                ...cart,
                products: [
                    ...cart.products,
                    { 
                        product_id: product.id, 
                        quantity,
                        product,
                        is_added_to_checkout: isAddedToCheckOut
                    }
                ]
            });
        }
        
        return cart;
    });
};

export const toggleAddToCheckout = (product: Product, user: User, carts: Cart[]): Cart[] =>
{
    const newCart = carts.map(cart => 
    {
        if (cart.user_id === user.id) 
        {
            const userProducts = cart.products.map(cartProd => (
                cartProd.product_id === product.id 
                    ? ({ ...cartProd, is_added_to_checkout: !cartProd.is_added_to_checkout })
                    : cartProd
            ));

            return {
                ...cart,
                products: userProducts
            };
        }

        return cart;
    });

    return newCart;
};

export const toggleAddAllToCheckout = (user: User, carts: Cart[]): Cart[] => 
{
    const newCart = carts.map(cart => 
    {
        if (cart.user_id === user.id) 
        {
            const userProducts = cart.products.map(cartProd => ({
                ...cartProd,
                is_added_to_checkout: !cartProd.is_added_to_checkout
            }));

            return {
                ...cart,
                products: userProducts
            };
        }

        return cart;
    });

    return newCart;
};