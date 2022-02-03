import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Avatar, Badge, Link } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import { authSelector } from './../../redux/modules/auth/selector';
import { connect } from 'react-redux';
import { AuthState } from '../../types/states/AuthState';
import { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import { userCartSelector } from '../../redux/modules/cart/selector';
import { Cart } from '../../types/states/CartState';
import { useNavigate } from 'react-router-dom';
import { CART_PATH, STORE_PATH } from '../../routes/paths';
import SearchBar from '../SearchBar';

interface Prop {
    authState: AuthState,
    userCartState: Cart
};

const MainLayoutAppBar = ({ authState, userCartState }: Prop) => 
{
    const navigate = useNavigate();
    const [ profileMenu, setProfileMenu ] = useState<null | HTMLElement>(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ProfileMenu profileMenu={ profileMenu } setProfileMenu={ setProfileMenu } />
            <AppBar position="fixed" color="inherit" elevation={ 1 }>
                <Toolbar>
                    <Link 
                        href={ STORE_PATH }
                        sx={{ 
                            flexGrow: 1, 
                            display: { 
                                xs: 'none', 
                                sm: 'block' 
                            }, 
                            textDecoration: 'none' 
                        }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                        >
                            <strong>G</strong> <small>shop</small>
                        </Typography>
                    </Link>
                    <SearchBar />
                    <IconButton onClick={ () => navigate(CART_PATH) }>
                        <Badge badgeContent={ userCartState?.products?.length } color="error">
                            <AddShoppingCartIcon color="action" />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={ (e) => setProfileMenu(e.currentTarget) } sx={{ marginLeft: 2 }}>
                        {
                            (authState.user.picture) 
                                ? <Avatar src={ authState.user.picture.data.url } />
                                : <Avatar>{ authState.user.name[0].toUpperCase() }</Avatar>
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const mapStateToProps = createStructuredSelector({
    authState: authSelector,
    userCartState: userCartSelector
});

export default connect(mapStateToProps)(MainLayoutAppBar);