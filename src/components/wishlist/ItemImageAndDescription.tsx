import Grid from '@mui/material/Grid'
import { Product } from '../../types/states/StoreState';
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material';

interface Prop {
    product: Product
}

const ItemImageAndDescription = ({ product  }: Prop) => 
{
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item mr={ 2 }>
                <Link href="/">
                    <img src={ product.image } alt={ product.title } height={ 60 } width={ 60 } />
                </Link>
            </Grid>
            <Grid item>
                <Link href="" sx={{ textDecoration: "none", color: "black" }}>
                    <Typography variant="subtitle2">
                        <strong>{ product.title }</strong>
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    );
};

export default ItemImageAndDescription;
