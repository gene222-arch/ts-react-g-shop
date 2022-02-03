import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Product } from '../../types/states/StoreState';
import Typography from '@mui/material/Typography'
import InputQuantity from './InputQuantity';
import Grid from '@mui/material/Grid'
import PriceAndActionButton from './PriceAndActionButton';
import { Link } from '@mui/material';
import cartItemsUseStyles from './../../assets/mui-styles/cart.item';
import { CartProduct } from '../../types/states/CartState';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_DETAILS_PATH } from '../../routes/paths';
import { useDispatch, connect } from 'react-redux';
import { toggleAddToCheckout } from '../../redux/modules/cart/action.creator';
import { createStructuredSelector } from 'reselect';
import { userSelector } from './../../redux/modules/auth/selector';
import { User } from '../../types/states/AuthState';

interface Prop {
    cart: CartProduct,
    handleQuantityChange: (productId: number, quantity: number) => void,
    userState: User
};

const CartItem = ({ cart, handleQuantityChange, userState }: Prop) => 
{
    const { product } = cart;
    const classes = cartItemsUseStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ quantity, setQuantity ] = useState(cart.quantity);

    const handleToggleAddToCheckout = () => 
    {
        dispatch(toggleAddToCheckout({
            product,
            user: userState
        }));
    };

    const handleClickNavigate = () => {
        navigate(
            PRODUCT_DETAILS_PATH.replace(
                ":id", 
                product.id.toString())
            );
    };

    const handleIncrement = () => 
    {
        if (cart.is_added_to_checkout) 
        {
            const totalQuantity = quantity + 1;

            handleQuantityChange(product.id, totalQuantity);
            setQuantity(totalQuantity);
        }
    };

    const handleDecrement = () => 
    {
        if (quantity && (quantity !== 1) && cart.is_added_to_checkout) 
        {
            const totalQuantity = quantity - 1;

            handleQuantityChange(product.id, totalQuantity);
            setQuantity(totalQuantity);
        }
    };

    return (
        <Grid 
            container 
            alignItems="center" 
            spacing={ 2 } 
            mb={ 4 } 
            justifyContent="center" 
            py={ 3 } 
            px={ 1 }
        >
            <Grid item>
                <Checkbox 
                    edge="start" 
                    disableRipple 
                    onChange={ handleToggleAddToCheckout } 
                    checked={ cart.is_added_to_checkout }
                />
            </Grid>
            <Grid item xs={ 2 } sm={ 2 } md={ 2 } lg={ 2 } xl={ 2 }>
                <img 
                    src={ product.image } 
                    width={ 60 } 
                    height={ 60 } 
                    alt={ product.title } 
                    className={ classes.img }
                    onClick={ handleClickNavigate }
                />
            </Grid>
            <Grid item xs={ 4 }>
                <Typography 
                    variant="body1" 
                    align="left" 
                    className={ classes.productTitle }
                    onClick={ handleClickNavigate }
                >
                    { product.title }
                </Typography> 
            </Grid>
            <Grid item xs={ 3 }>
                <PriceAndActionButton product={ product } quantity={ quantity } />
            </Grid>
            <Grid item>
                <InputQuantity 
                    quantity={ quantity }
                    handleIncrement={ handleIncrement }
                    handleDecrement={ handleDecrement }
                />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    userState: userSelector
});

export default connect(mapStateToProps)(CartItem);
