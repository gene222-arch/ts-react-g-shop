import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ProductImageCarousel from '../../components/product/ProductImageCarousel';
import ProductDescription from '../../components/product/ProductDescription';
import HeaderNavigation from '../../components/product/HeaderNavigation';
import { createStructuredSelector } from 'reselect';
import { storeSelector } from './../../redux/modules/store/selector';
import { connect } from 'react-redux';
import { StoreState } from '../../types/states/StoreState';
import { useParams } from 'react-router-dom';
import { Product } from './../../types/states/StoreState';
import { useEffect, useState } from 'react';

interface Prop {
    storeState: StoreState
}

const ProductDetail = ({ storeState }: Prop) => 
{
    let { id } = useParams<'id'>();
    const [ product, setProduct ] = useState<Product | null>(null);

    const onLoadFindProduct = () => 
    {
        if (id) 
        {
            const productId = parseInt(id);

            const findProduct = storeState.products.find(product => (product.id === productId));

            findProduct && setProduct(findProduct);
        }
    };

    useEffect(() => 
    {
        onLoadFindProduct();
    }, [id]);

    if (! product) return <div>Not Found</div>

    return (
        <Container maxWidth="xl">
            <Grid container spacing={ 4 }>
                <Grid item xs={ 12 }>
                    <HeaderNavigation />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 4 }>
                    <ProductImageCarousel product={ product } />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 5 }>
                    <ProductDescription product={ product } />
                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    storeState: storeSelector
});

export default connect(mapStateToProps)(ProductDetail);
