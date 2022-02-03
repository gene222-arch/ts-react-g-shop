import { WishList } from "../../../types/states/WishlistState";

export const toggleAddToWishList = (wishLists: WishList[], userId: number, productId: number): WishList[] => 
{
    const authUserWishList = wishLists.find(wl => wl.user_id === userId);
    
    /** Create new wishlist */
    if (! authUserWishList) 
    {
        return [
            ...wishLists,
            {
                id: Date.now(),
                user_id: userId,
                product_ids: [
                    productId
                ]
            }
        ];
    }

    /** Update wishlist */
    const productExists = authUserWishList.product_ids.includes(productId);

    if (! productExists) 
    {
        const newWishLists = wishLists.map((wl) => {
            if (wl.user_id === userId) {
                return {
                    ...authUserWishList,
                    product_ids: [
                        ...authUserWishList.product_ids,
                        productId
                    ]
                }
            }

            return wl;
        });

        return newWishLists;
    }
    /** filter wishlist items */
    const filterItems = authUserWishList.product_ids.filter(prodId => prodId !== productId);
    
    if (! filterItems.length) {
        return wishLists.filter(wl => wl.user_id !== userId);
    }

    const newWishLists_ = wishLists.map(wl => {
        if (wl.user_id === userId) {
            return {
                ...wl,
                product_ids: filterItems
            };
        }

        return wl;
    });

    return newWishLists_;
}