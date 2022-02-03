import Grid from '@mui/material/Grid'
import ItemImageAndDescription from './ItemImageAndDescription';
import ItemPrice from './ItemPrice';
import Button from '@mui/material/Button'
import { 
    AddShoppingCart, 
    DeleteForever,
    RemoveShoppingCart
} from '@mui/icons-material';
import { Product } from '../../types/states/StoreState';
import { useDispatch, connect } from 'react-redux';
import { toggleAddToWishListStart } from './../../redux/modules/wishlist/action.creator';
import { createStructuredSelector } from 'reselect';
import { userSelector } from './../../redux/modules/auth/selector';
import { User } from '../../types/states/AuthState';
import { toggleAddToCartStart } from '../../redux/modules/cart/action.creator';
import { Cart } from '../../types/states/CartState';
import { userCartSelector } from '../../redux/modules/cart/selector';

interface Prop {
    product: Product;
    userState: User;
    userCartState: Cart
}

const WishListItem = ({ product, userState, userCartState }: Prop) => 
{
    const dispatch = useDispatch();

    const isProductAddedToCart = userCartState.products.find(prod => (prod.product_id === product.id));

    const handleClickAddToCart = () => 
    {
        dispatch(toggleAddToCartStart({
            product,
            quantity: 1,
            user: userState
        }));
    };

    const handleClickRemove = () => 
    {
        dispatch(toggleAddToWishListStart({
            user: userState,
            product
        }));
    };

    return (
        <Grid container spacing={1} justifyContent="space-between" mb={ 2 }>
            <Grid item xs={ 6 } sm={ 6 }>
                <ItemImageAndDescription product={ product } />
            </Grid>
            <Grid item xs={ 3 } sm={ 3 }>
                <ItemPrice 
                    currentPrice={ product.price }
                    originalPrice={ product.price }
                    discountPercentage={ 0 }
                />
            </Grid>
            <Grid item xs={ 2 } sm={ 3 }>
                <Button 
                    variant="contained" 
                    color={ !isProductAddedToCart ? "warning" : "error" } 
                    sx={{ mr: 1 }} 
                    onClick={ handleClickAddToCart }
                >
                    {
                        !isProductAddedToCart 
                            ? <AddShoppingCart fontSize="small" />
                            : <RemoveShoppingCart fontSize="small" />
                    }
                </Button>
                <Button variant="outlined" color="inherit" onClick={ handleClickRemove }>
                    <DeleteForever fontSize="small" />
                </Button>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    userState: userSelector,
    userCartState: userCartSelector
});

export default connect(mapStateToProps)(WishListItem);
