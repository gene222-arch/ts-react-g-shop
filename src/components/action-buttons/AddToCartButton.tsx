import { AddShoppingCart, ShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Product } from '../../types/states/StoreState';
import { createStructuredSelector } from 'reselect';
import { userCartSelector } from '../../redux/modules/cart/selector';
import { connect, useDispatch } from 'react-redux';
import { Cart } from '../../types/states/CartState';
import { useMemo } from 'react';
import { toggleAddToCartStart } from '../../redux/modules/cart/action.creator';
import { userSelector } from '../../redux/modules/auth/selector';
import { User } from '../../types/states/AuthState';

interface Prop {
    product: Product,
    userCartState: Cart,
    userState: User
}

const AddToCartButton = ({ product, userCartState, userState }: Prop) => 
{
    const dispatch = useDispatch();

    const isProductAddedToCart = useMemo(() => 
    {
        const isAdded = userCartState
            ?.products
            ?.find(cart => (cart.product_id === product.id));

        return Boolean(isAdded);
    }, [product, userCartState]);

    
    const handleClickAddToCart = () => 
    {
        dispatch(toggleAddToCartStart({
            product,
            quantity: 1,
            user: userState
        }));
    };

    return (
        <IconButton
            aria-label="add-to-cart"
            color={ isProductAddedToCart ? 'success' : 'warning' }
            onClick={ handleClickAddToCart }
        >
            {
                !isProductAddedToCart
                        ? <AddShoppingCart /> 
                        : <ShoppingCart /> 
            }
        </IconButton>
    )
};

const mapStateToProps = createStructuredSelector({
    userCartState: userCartSelector,
    userState: userSelector
});

export default connect(mapStateToProps)(AddToCartButton);
