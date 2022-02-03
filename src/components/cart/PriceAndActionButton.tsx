import React, { useCallback } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CURRENCY } from '../../config/currency';
import { useDispatch, connect } from 'react-redux';
import { toggleAddToCartStart } from '../../redux/modules/cart/action.creator';
import { Product } from '../../types/states/StoreState';
import { createStructuredSelector } from 'reselect';
import { authSelector } from './../../redux/modules/auth/selector';
import { AuthState } from '../../types/states/AuthState';
import { toggleAddToWishListStart } from './../../redux/modules/wishlist/action.creator';
import { wishListSelector } from './../../redux/modules/wishlist/selector';
import { WishListState } from '../../types/states/WishlistState';

interface Prop {
    authState: AuthState,
    wishListState: WishListState,
    product: Product,
    quantity: number
};

const PriceAndActionButton = ({ authState, wishListState, product, quantity }: Prop) => 
{
    const dispatch = useDispatch();

    const handleClickRemove = () =>
    {
        dispatch(toggleAddToCartStart({
            user: authState.user,
            product,
            quantity
        }));
    };

    const handleToggleAddToWishList = () =>
    {
        dispatch(toggleAddToWishListStart({
            user: authState.user,
            product
        }));
    };

    const isAddedToWishList = useCallback(() => 
    {
        const authUserWishList = wishListState.wishLists.find(wishlist => wishlist.user_id === authState.user.id);

        if (authUserWishList) {
            return authUserWishList.product_ids.includes(product.id);
        }

        return false;
    }, [wishListState]);

    return (
        <Grid container spacing={1} flexDirection="column" alignItems="center">
            <Grid item>
                <Typography variant="h6" color="orangered">{ `${ CURRENCY }${ product.price }` }</Typography>
            </Grid>
            <Grid item>
                <ButtonGroup 
                    color="warning" 
                    variant="contained" 
                    aria-label="outlined error button group" 
                    size="small"
                >
                    <Button
                        variant="text"
                        onClick={ handleToggleAddToWishList }
                    >
                        {
                            isAddedToWishList()
                                ? <FavoriteIcon color="error" />
                                : <FavoriteBorderIcon />
                        }
                    </Button>
                    <Button
                        color="inherit"
                        variant="text" 
                        onClick={ handleClickRemove }
                    >
                        <RemoveCircleIcon />
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector,
    wishListState: wishListSelector
});

export default connect(mapStateToProps)(PriceAndActionButton);
