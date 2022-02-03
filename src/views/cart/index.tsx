import { useCallback, useEffect, useMemo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { userCartSelector } from '../../redux/modules/cart/selector';
import { connect } from 'react-redux';
import { Cart, CartProduct } from '../../types/states/CartState';
import CartItem from '../../components/cart/CartItem';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material';
import ListHeaderOperations from '../../components/cart/ListHeaderOperations';
import OrderSummary from '../../components/cart/OrderSummary';
import ContinueShoppingMessage from '../../components/ContinueShoppingMessage';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type OrderSummary = {
    itemsCount: number,
    totalPrice: number,
    shippingFee: number,
    subTotalPrice: number
};

interface Prop {
    userCartState: Cart
}


const orderSummaryInitialVal: OrderSummary = {
    itemsCount: 0,
    totalPrice: 0,
    shippingFee: 0,
    subTotalPrice: 0
};

const Cart_ = ({ userCartState }: Prop) => 
{
    const [ cartItems, setCartItems ] = useState<CartProduct[]>([]);
    const [ orderSummary, setOrderSummary ] = useState<OrderSummary>(orderSummaryInitialVal);

    const totalItemsInCheckout = useMemo(() => {
        const count = userCartState
            .products
            .filter(cart => cart.is_added_to_checkout).length;

        return count;
    }, [userCartState]);

    const onLoadSetCartItems = useCallback(() => 
    {
        if (! userCartState.products.length) {
            setCartItems([]);
        }

       if (userCartState?.products.length) 
       {
            const items = [ ...userCartState.products ];

            const totalPrice = items
                .reduce((total, cart) => 
                {
                    if (cart.is_added_to_checkout) {
                        return (total + (cart.quantity * cart.product.price));
                    }

                    return total;
                }, 0)
                .toFixed(2);

            const subTotalPrice = (parseFloat(totalPrice) - 0).toFixed(2);

            setOrderSummary({
                itemsCount: items.length,
                totalPrice: parseFloat(totalPrice),
                shippingFee: 0,
                subTotalPrice: parseFloat(subTotalPrice)
            });
            setCartItems(items);
       }
    }, [userCartState]);

    const handleQuantityChange = (productId: number, quantity: number) => 
    {
        const newCartItems = cartItems.map(cart => (
            cart.product_id === productId 
                ? ({ ...cart, quantity })
                : cart
        ));

        const totalPrice = cartItems.reduce((total, cart) => 
        {
            if (cart.is_added_to_checkout) {
                if (cart.product_id === productId) {
                    return (total + (cart.product.price * quantity));
                }
    
                return (total + (cart.quantity * cart.product.price));
            }

            return total;
        }, 0)
        .toFixed(2);

        const subTotalPrice = (parseFloat(totalPrice) - 0).toFixed(2);

        setOrderSummary({
            ...orderSummary,
            totalPrice: parseFloat(totalPrice),
            shippingFee: 0,
            subTotalPrice: parseFloat(subTotalPrice)
        });
        setCartItems(newCartItems);
    };

    useEffect(() => {
        onLoadSetCartItems();
    }, [onLoadSetCartItems]);

    if (! cartItems.length) {
        return (
            <ContinueShoppingMessage
                muiIcon={ AddShoppingCartIcon } 
                message="There are no items in this cart"
                style={{
                    marginTop: '15rem'
                }}
            />
        )
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={ 1 }>
                <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 8 } xl={ 8 } mb={ 2 }>
                    <ListHeaderOperations itemsCount={ totalItemsInCheckout } />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 8 } xl={ 8 }>
                    {
                        cartItems
                            .map((cart, index) => (
                                <Paper key={ index } sx={{ backgroundColor: "aliceblue" }}>
                                    <CartItem cart={ cart } handleQuantityChange={ handleQuantityChange } />
                                </Paper>
                            ))
                    }
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 4 } xl={ 4 }>
                    <OrderSummary { ...orderSummary } />
                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    userCartState: userCartSelector
});

export default connect(mapStateToProps)(Cart_);
