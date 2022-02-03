import { makeStyles } from '@mui/styles';
// import { Theme } from '@mui/material/styles';

const cartItemsUseStyles = makeStyles(() => ({
    productTitle: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    img: {
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

export default cartItemsUseStyles;