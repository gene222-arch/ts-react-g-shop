import { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { wishListSelector } from './../../redux/modules/wishlist/selector';
import { connect } from 'react-redux';
import { Product, StoreState } from '../../types/states/StoreState';
import { WishListState } from '../../types/states/WishlistState';
import { AuthState } from '../../types/states/AuthState';
import { authSelector } from './../../redux/modules/auth/selector';
import { storeSelector } from './../../redux/modules/store/selector';
import WishListItem from '../../components/wishlist/WishListItem';
import CustomerSidebarLayout from '../layouts/CustomerSidebarLayout';
import Grid from '@mui/material/Grid'
import { Paper, Button } from '@mui/material';
import ContinueShoppingMessage from '../../components/ContinueShoppingMessage';
import { Favorite } from '@mui/icons-material';

interface Prop {
	authState: AuthState,
	storeState: StoreState,
	wishListState: WishListState
}

const WishList = ({ authState, storeState, wishListState }: Prop) => 
{
	const [ productsCount, setProductsCount ] = useState(0);
	const [ products, setProducts ] = useState<Product[]>([]);

	const onLoadSetProducts = () =>
	{
		const productIds = wishListState
			.wishLists
			.find(wl => wl.user_id === authState.user.id)
			?.product_ids;

		if (productIds && productIds.length) 
		{
			const products_ = storeState
				.products
				.filter(prod => productIds?.includes(prod.id));

			setProductsCount(productIds.length);
			setProducts(products_);
		}
	};

	useEffect(() => {
		onLoadSetProducts();

		return () => {
			setProducts([]);
		}
	}, [wishListState]);

	return (
		<CustomerSidebarLayout headerTitle={ `My Wishlist (${ productsCount })` }>
			<Grid container spacing={1} flexDirection="column">
				<Grid item xs={ 12 } mb={ 2 }>
					<Paper sx={{ p: 1 }}>
						<Button variant="text" color="info">
						  	<strong>ADD ALL TO CART</strong>
						</Button>
					</Paper>
				</Grid>
				<Grid item xs={ 12 }>
					{
						products.map(prod => <WishListItem key={ prod.id } product={ prod } />)
					}
					{
						(!products.length) && (
							<ContinueShoppingMessage
								message={ "There are no favorites yet. Add your favorites to wishlist and they will show here." }
								muiIcon={ Favorite }
							/>
						)
					}
				</Grid>
			</Grid>
		</CustomerSidebarLayout>
	);
};

const mapStateToProps = createStructuredSelector({
	authState: authSelector,
	storeState: storeSelector,
  	wishListState: wishListSelector
});

export default connect(mapStateToProps)(WishList);
