import Typography from '@mui/material/Typography'
import { CURRENCY } from '../../config/currency';

interface Prop {
    currentPrice: number,
    originalPrice: number,
    discountPercentage: number
}

const ItemPrice = ({ currentPrice, originalPrice, discountPercentage }: Prop) => {
    return (
        <div>
            <Typography variant="h6" color="orangered">
                { `${ CURRENCY }${ currentPrice }` }
            </Typography>
            <Typography component="span" variant="subtitle1" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                { `${ CURRENCY }${ originalPrice }` }
            </Typography>
            <Typography component="span" variant="subtitle1">
                { ` -${ discountPercentage }%` }
            </Typography>
        </div>
    );
};

export default ItemPrice;
