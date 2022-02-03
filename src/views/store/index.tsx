import { createStructuredSelector } from 'reselect';
import { authSelector } from './../../redux/modules/auth/selector';
import { connect } from 'react-redux';
import { AuthState } from '../../types/states/AuthState';
import Grid from '@mui/material/Grid'
import CategoryList from '../../components/store/CategoryList';
import AdvertisementBanner from '../../components/store/AdvertisementBanner';
import ProductList from '../../components/store/ProductList';

interface Prop {
    authState: AuthState
};

const Store = ({ authState }: Prop) => 
{
    return (
        <Grid container spacing={ 4 }>
            <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }>
                <Grid container spacing={ 1 }>
                    <Grid item xs={ 12 } xl={ 4 }>
                        <CategoryList />
                    </Grid>
                    <Grid item xs={ 12 } xl={ 8 }>
                        <AdvertisementBanner />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }>
                <img 
                    src="https://villagepipol.com/wp-content/uploads/2020/01/Fleek-Orbit-Stirring-Mug-VP-Ads.jpeg" 
                    style={{ width: '100%', height: '100%' }} 
                />
            </Grid>
            <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }>
                <ProductList />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector
});

export default connect(mapStateToProps)(Store);
