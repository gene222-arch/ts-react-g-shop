import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import { Chip, Menu } from '@mui/material';
import { useDispatch, connect } from 'react-redux';
import { signOutStart } from '../../redux/modules/auth/action.creator';
import { useNavigate } from 'react-router-dom';
import { WISHLIST_PATH } from './../../routes/paths';
import { createStructuredSelector } from 'reselect';
import { userWishListSelector } from '../../redux/modules/wishlist/selector';
import { WishList } from '../../types/states/WishlistState';

interface Props {
    profileMenu: null | HTMLElement,
    setProfileMenu: React.Dispatch<React.SetStateAction<null | HTMLElement>>,
    userWishListState: WishList | undefined
};

const ProfileMenu = ({ profileMenu, setProfileMenu, userWishListState }: Props) => 
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickSignOut = () => dispatch(signOutStart());

    const handleClose = () => setProfileMenu(null);

    const handleNavigateToWishList = () => {
        handleClose();
        navigate(WISHLIST_PATH);
    }

    return (
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <Menu
                id="profile-menu"
                anchorEl={ profileMenu }
                open={ Boolean(profileMenu) }
                onClose={ handleClose }
                PaperProps={{
                    style: {
                        width: '15rem'
                    }
                }}
            >
                <MenuItem onClick={ handleNavigateToWishList }>
                    <ListItemIcon>
                        <FavoriteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Wishlist</ListItemText>
                    {
                        userWishListState && (
                            <Chip label={ userWishListState?.product_ids.length } color="error" size="small" />
                        )
                    }
                </MenuItem>
                <Divider />
                <MenuItem onClick={ handleClickSignOut }>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Sign out</ListItemText>
                </MenuItem>
            </Menu>
        </Paper>
    );
};

const mapStateToProps = createStructuredSelector({
    userWishListState: userWishListSelector
});

export default connect(mapStateToProps)(ProfileMenu);