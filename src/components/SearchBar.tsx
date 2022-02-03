import React, { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search';
import { createStructuredSelector } from 'reselect';
import { storeSelector } from './../redux/modules/store/selector';
import { connect } from 'react-redux';
import { StoreState } from '../types/states/StoreState';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_DETAILS_PATH } from '../routes/paths';

interface Prop {
    storeState: StoreState
}

const SearchBar = ({ storeState }: Prop) => 
{
    const navigate = useNavigate();

    const handleNavigateToWishList = (productID: number) => {
        navigate(
            PRODUCT_DETAILS_PATH.replace(":id", productID.toString())
        );
    };
    
    const options = useMemo(() => 
    {   
        const products = storeState
            .products
            .map(prod => ({ ...prod, label: prod.title, firstLetter: prod.title[0] }))
            .sort((prodOne, prodTwo) => -prodTwo.firstLetter.localeCompare(prodOne.firstLetter));
        
        return products;
    }, [storeState]);

    return (
        <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item>
                <SearchIcon sx={{ mt: 1 }} color="warning" />
            </Grid>
            <Grid item xs={ 10 }>
                <Autocomplete
                    id="search-bar"
                    disablePortal
                    fullWidth
                    noOptionsText="Oops the movie is not found"
                    forcePopupIcon={ false }
                    groupBy={ option => option.firstLetter }
                    options={ options }
                    renderOption={ (props, option) => (
                        <Box 
                            component="li" 
                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }} 
                            {...props}
                            onClick={ () => handleNavigateToWishList(option.id) }
                        >
                            { option.label }
                        </Box>
                    ) }
                    renderInput={(params) => (
                        <TextField 
                            {...params}
                            size="small" 
                            label="Search in Gshop" 
                            variant="filled"
                        />
                    )}
                />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    storeState: storeSelector
});

export default connect(mapStateToProps)(SearchBar);