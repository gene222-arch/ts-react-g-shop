import { createSelector } from "reselect";
import { RootState } from "../../../types/states/RootState";
import memoize from 'lodash.memoize';

const selectWishList = (state: RootState) => state.wishList;

const selectUserWishList = (state: RootState) => 
{
    const { auth, wishList } = state;
    const wl = wishList.wishLists.find(wl => wl.user_id === auth.user.id);

    return wl;
}

export const wishListSelector = createSelector(selectWishList, wishList => wishList);

export const userWishListSelector = createSelector(selectUserWishList, userWishlist =>  userWishlist);

export const isProductInUserWishListSelector = createSelector(
    selectUserWishList, 
    userWishList => memoize(
        (productID: number) => Boolean(userWishList?.product_ids.includes(
            productID
        ))
    )
);