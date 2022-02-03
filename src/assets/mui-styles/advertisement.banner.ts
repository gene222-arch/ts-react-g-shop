import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const advertisementBannerUseStyles = makeStyles((theme: Theme) => ({
    banner: {
        borderRadius: '1.25%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            height: '84.5vh'
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(4)
        }
    }
}));

export default advertisementBannerUseStyles;