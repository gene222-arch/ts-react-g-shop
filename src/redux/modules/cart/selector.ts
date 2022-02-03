import { createSelector } from "reselect";
import { Cart } from "../../../types/states/CartState";
import { RootState } from "../../../types/states/RootState";

const selectCart = (state: RootState) => state.cart;
const selectUserCart = (state: RootState): Cart => 
{
    const userID = state.auth.user.id as number;
    const cart = state.cart.carts.find(cart => cart.user_id === userID) as Cart;

    return cart;
}

export const cartSelector = createSelector(selectCart, cart => cart);

export const userCartSelector = createSelector(selectUserCart, userCart => userCart);