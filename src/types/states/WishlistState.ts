export type WishList = {
    id: number,
    user_id: number,
    product_ids: number[]
};

export type WishListState = 
{
    wishList: WishList,
    wishLists: WishList[],
    isLoading: boolean,
    error: any
};