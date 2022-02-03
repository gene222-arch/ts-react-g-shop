import { Product } from '../../types/states/StoreState';
import Grid from '@mui/material/Grid';
import AddToWishListButton from './AddToWishListButton';
import SocialShareButton from './SocialShareButton';

interface Prop {
    product: Product
}

const ShareAndAddToWishlistButton = ({ product }: Prop) => 
{
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item>
                <AddToWishListButton product={ product } />
            </Grid>
            <Grid item>
                <SocialShareButton product={ product } />
            </Grid>
        </Grid>
    );
};

export default ShareAndAddToWishlistButton;
