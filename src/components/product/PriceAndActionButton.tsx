import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Product } from '../../types/states/StoreState';
import { ButtonGroup, Button } from '@mui/material';
import { CURRENCY } from '../../config/currency';
import { createStructuredSelector } from 'reselect';
import { userSelector } from '../../redux/modules/auth/selector';
import { User } from '../../types/states/AuthState';
import { useDispatch, connect } from 'react-redux';
import { toggleAddToCartStart } from '../../redux/modules/cart/action.creator';


interface Prop {
    product: Product,
    userState: User
}

type QuantityAction = "increment" | "decrement";

const PriceAndActionButton = ({ product, userState }: Prop) => 
{
    const dispatch = useDispatch();
    const [ quantity, setQuantity ] = useState(1);

    const handleChangeQuantity = (action: QuantityAction) => 
    {
        if (action === "increment") {
            setQuantity(quantity + 1);
        }

        if (action === "decrement" && (quantity > 1)) {
            setQuantity(quantity - 1)
        }
    }

    const handleToggleAddToCart = () => 
    {
        dispatch(toggleAddToCartStart({
            product,
            quantity,
            user: userState
        }));
    };

    return (
        <Grid container spacing={10} justifyContent="space-between">
            <Grid item>
                <Typography variant="h4" color="orangered">
                    { `${ CURRENCY }${ product.price }` }
                </Typography>
                <Typography variant="subtitle1" color="GrayText" sx={{ textDecorationLine: "line-through" }}>
                    { `${ CURRENCY }${ product.price }` }
                </Typography>
            </Grid>
            <Grid item xs={ 12 }>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <Typography variant="subtitle1" color="GrayText">Quantity</Typography>
                    </Grid>
                    <Grid item>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small">
                            <Button 
                                variant="contained" 
                                color="inherit"
                                onClick={ () => handleChangeQuantity("decrement") }
                            >
                                -
                            </Button>
                            <Typography variant="body1" py={ 1 } px={ 2 }>{ quantity }</Typography>
                            <Button 
                                variant="contained" 
                                color="inherit"
                                onClick={ () => handleChangeQuantity("increment") }
                            >
                                +
                            </Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="GrayText">
                            Only 6 items left.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={ 12 }>
                <Button variant="contained" color="success" fullWidth sx={{ mb: 1 }}>
                    BUY NOW
                </Button>
                <Button 
                    variant="contained" 
                    color="warning" 
                    fullWidth 
                    sx={{ mb: 1 }}
                    onClick={ handleToggleAddToCart }
                >
                    ADD TO CART
                </Button>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    userState: userSelector
});

export default connect(mapStateToProps)(PriceAndActionButton);
