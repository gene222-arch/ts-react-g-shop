export const MANAGE_CART = 'Manage Cart';
export const MANAGE_WISHLIST = 'Manage Wishlist';

export type Access =
    | typeof MANAGE_CART
    | typeof MANAGE_WISHLIST;