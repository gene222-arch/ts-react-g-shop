import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Divider, Rating } from '@mui/material';
import { Product } from './../../types/states/StoreState';
import StyledLink from '../styled-components/StyledLink';
import ShareAndAddToWishlistButton from '../action-buttons/ShareAndAddToWishlistButton';
import PriceAndActionButton from './PriceAndActionButton';

interface Prop {
    product: Product
}

const ProductDescription = ({ product }: Prop) => 
{
    return (
        <Grid container spacing={1} flexDirection="column">
            <Grid item>
                <Typography variant="h4">{ product.title }</Typography>
            </Grid>
            <Grid item alignSelf="self-end">
                <ShareAndAddToWishlistButton product={ product } />
            </Grid>
            <Grid item>
                <Rating readOnly value={ 3.5 } precision={ 0.5 } />
            </Grid>
            <Grid item>
                <Typography variant="caption" color="GrayText">
                    Brand: <StyledLink href="/">Xiaomi</StyledLink>
                </Typography>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item xs={ 12 }>
                <PriceAndActionButton product={ product } />
            </Grid>
        </Grid>
    );
};

export default ProductDescription;
