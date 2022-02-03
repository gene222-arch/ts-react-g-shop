import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const productImageCarouselUseStyles = makeStyles((theme: Theme) => ({
    previewImg: {
        borderRadius: '2.5%',
        height: "25rem",
        width: "100%"
    },  
    img: {
        borderRadius: '2.5%',
        height: "4rem",
        width: "100%"
    },
    zoomableImage: {
        borderRadius: "2.5%",
        [theme.breakpoints.only('sm')]: {
            display: "none"
        }
    }
}));

export default productImageCarouselUseStyles;