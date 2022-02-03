import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const productUseStyles = makeStyles((theme: Theme) => ({
    addToCartIcon: {
        marginLeft: 'auto'
    },
    cardContent: {
        height: '22.5vh'
    },
    cardHeader: {
        height: '15vh',
        padding: theme.spacing(1, 2)
    },
    cardMedia: {
        objectFit: 'contain',
        height: '20vh'
    },
    /** Height: 22.5 + 15 + 20 = 57.5vh */
}));

export default productUseStyles;