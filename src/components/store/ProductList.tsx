import { useEffect } from 'react';
import Product from './Product';
import Grid from '@mui/material/Grid';
import { useDispatch, connect } from 'react-redux';
import { getProductsStart } from '../../redux/modules/store/action.creator';
import { createStructuredSelector } from 'reselect';
import { storeSelector } from '../../redux/modules/store/selector';
import { StoreState } from '../../types/states/StoreState';
import { Skeleton } from '@mui/material';

interface Prop {
    storeState: StoreState
};

const ProductList = ({ storeState }: Prop) => 
{
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getProductsStart(6));
    }, []);

    return (
        <Grid container spacing={ 1 } justifyContent="center">
            {
                storeState
                    .products
                    .map((product) => (
                        <Grid key={ product.id } item xs={ 12 } sm={ 4 } md={ 4 } lg={ 3 } xl={ 2 }>
                            { 
                                storeState.isLoading 
                                    ? <Skeleton animation="wave" style={{ height: '60.5vh' }} />
                                    : <Product product={ product } /> 
                            }
                        </Grid>
                    ))
           }
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    storeState: storeSelector 
});

export default connect(mapStateToProps)(ProductList);
