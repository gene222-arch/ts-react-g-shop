import { Product } from '../../types/states/StoreState';
import { useDispatch, useSelector, connect } from 'react-redux';
import { RootState } from '../../types/states/RootState';
import { isProductInUserWishListSelector } from '../../redux/modules/wishlist/selector';
import { Grid, Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { createStructuredSelector } from 'reselect';
import { userSelector } from '../../redux/modules/auth/selector';
import { User } from '../../types/states/AuthState';
import { toggleAddToWishListStart } from '../../redux/modules/wishlist/action.creator';

interface Prop {
    product: Product,
    userState: User
}

const ShareAddToWishListButton = ({ product, userState }: Prop) => 
{
    const dispatch = useDispatch();
    const isProductInUserWishList = useSelector((state: RootState) => isProductInUserWishListSelector(state)(product.id));

    const handleToggleAddToWishList = () => {
        dispatch(toggleAddToWishListStart({
            user: userState,
            product
        }));
    };

    return (
        <Button 
            variant="text"
            sx={{ "&:hover" : { backgroundColor: "transparent" } }}
            color="inherit"
            onClick={ handleToggleAddToWishList }
        >
        {
            !isProductInUserWishList
                ? <FavoriteBorder />
                : <Favorite color="error" />
        }
        </Button>
    );
};

const mapStateToProps = createStructuredSelector({
    userState: userSelector
});

export default connect(mapStateToProps)(ShareAddToWishListButton);
