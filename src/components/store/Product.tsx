import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Product as ProductType } from '../../types/states/StoreState';
import { strReplaceWith } from '../../utils/string';
import productUseStyles from '../../assets/mui-styles/product';
import { CURRENCY } from '../../config/currency';
import { Rating } from '@mui/material';
import AddToCartButton from '../action-buttons/AddToCartButton';
import ShareAndAddToWishlistButton from '../action-buttons/ShareAndAddToWishlistButton';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_DETAILS_PATH } from '../../routes/paths';

interface Prop {
    product: ProductType
};

const Product = ({ product }: Prop) => 
{
    const classes = productUseStyles();
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate(
            PRODUCT_DETAILS_PATH.replace(
                ":id", 
                product.id.toString())
            );
    };

    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <CardHeader
                title={ 
                    <Typography
                        variant="subtitle1"
                        onClick={ handleClickNavigate }
                        sx={{
                            textDecoration: "none",
                            color: "GrayText",
                            "&:hover": {
                                cursor: "pointer"
                            }
                        }}
                    >
                        { strReplaceWith(product.title, 40, '....') }
                    </Typography> 
                }
                subheader={ <Typography variant="subtitle2" color="textSecondary">{ product.category }</Typography> }
                className={ classes.cardHeader }
            />
            <CardMedia
                component="img"
                image={ product.image }
                alt={ product.title }
                className={ classes.cardMedia }
                onClick={ handleClickNavigate }
                sx={{
                    "&:hover": {
                        cursor: "pointer"
                    }
                }}
            />
            <CardContent className={ classes.cardContent }>
                <Typography variant="h5" color="orangered" py={ 1 }>
                    { `${ CURRENCY }${ product.price }` }
                </Typography>
                <Rating name="read-only" value={ product.rating.rate } readOnly precision={ 0.5 } />
                <Typography variant="body2" color="text.secondary">
                    { strReplaceWith(product.description, 120, '...') }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ShareAndAddToWishlistButton product={ product } />
                <AddToCartButton product={ product } />
            </CardActions>
        </Card>
    );
}

export default Product;