import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import orderSummaryUseStyles from '../../assets/mui-styles/order.summary';
import { CURRENCY } from '../../config/currency';

interface Prop {
    itemsCount: number,
    totalPrice: number,
    shippingFee: number,
    subTotalPrice: number
};

const OrderSummary = ({ itemsCount, totalPrice, shippingFee, subTotalPrice }: Prop) => 
{
    const classes = orderSummaryUseStyles();

    return (
        <Card className={ classes.cardContainer }>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Location
                </Typography>
                <Typography variant="subtitle1">
                    Calamba Laguna, Philippines
                </Typography>
                <Divider className={ classes.divider }/>
                <Typography variant="h5">
                    Order Summary
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <ListItem disablePadding>
                    <ListItemText primary={ `Subtotal (${ itemsCount } items)` } />
                    <span>{ `${ CURRENCY }${ totalPrice }` }</span>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Shipping fee" />
                    <span>{ `${ CURRENCY }${ shippingFee }` }</span>
                </ListItem>
                </Typography>
                <ListItem disablePadding>
                    <ListItemText primary="Subtotal" />
                    <Typography variant="h6" color="orangered">{ `${ CURRENCY }${ subTotalPrice }` }</Typography>
                </ListItem>
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained"
                    size="medium" 
                    color="warning"
                    fullWidth
                >
                    Proceed to Checkout { `(${ itemsCount })` }
                </Button>
            </CardActions>
        </Card>
    );
};

export default OrderSummary; 
