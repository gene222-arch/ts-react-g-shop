import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { storeSelector } from './../../redux/modules/store/selector';
import { connect } from 'react-redux';
import { Product as ProductType, StoreState } from '../../types/states/StoreState';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import Product from '../../components/store/Product';
import Container from '@mui/material/Container'
import SortByCategoryHeader from './../../components/store/SortByCategoryHeader';

interface Prop {
    storeState: StoreState
}

const SortByCategory = ({ storeState }: Prop) => 
{
    const { category } = useParams<'category'>();
    const [ products, setProducts ] = useState<ProductType[] | null>(null);

    const onLoadFilterByCategory = () => 
    {
        const prods = storeState
            .products
            .filter(prod => prod.category === category);
        
        setProducts(prods);
    };

    const handleSelectSort = (sort: string) => 
    {
        if (products) 
        {   
            let sortedProducts: ProductType[] = [];

            if (sort === "bottom-up") {
                sortedProducts = products
                    .sort((prodOne, prodTwo) => (prodOne.price - prodTwo.price));
            }
    
            if (sort === "top-to-bottom") {
                sortedProducts = products
                    .sort((prodOne, prodTwo) => (prodTwo.price - prodOne.price));
            }

            // setProducts(sortedProducts) // ! doesn`t work
            setProducts([...sortedProducts]); // * works
        }
    };

    useEffect(() => {
        onLoadFilterByCategory();
    }, [storeState]);

    if (! category) return <div>Category not defined</div>;

    return (
        <div>
           <Container maxWidth="lg">
                <Grid container spacing={1} mt={ 2 }>
                    <Grid item xs={ 12 }>
                        <SortByCategoryHeader 
                            category={ category }
                            itemsCount={ products?.length ?? 0 }
                            handleSelectSort={ handleSelectSort }
                        />
                    </Grid>
                    {
                        products?.map(prod => (
                            <Grid item key={ prod.id } xs={ 12 } sm={ 4 } md={ 3 }>
                                <Product product={ prod } />
                            </Grid>
                        ))
                    }
                </Grid>
           </Container>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    storeState: storeSelector
});

export default connect(mapStateToProps)(SortByCategory);
