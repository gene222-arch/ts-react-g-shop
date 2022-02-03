import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const categoryListUseStyles = makeStyles((theme: Theme) => ({
    paperContainer: {
        height: '95%',
        padding: theme.spacing(2)
    }
}));

export default categoryListUseStyles;