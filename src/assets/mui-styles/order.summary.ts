import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const orderSummaryUseStyles = makeStyles((theme: Theme) => ({
    cardContainer: {
        width: '100%'
    },
    divider: {
        margin: theme.spacing(2, 0)
    }
}));

export default orderSummaryUseStyles;