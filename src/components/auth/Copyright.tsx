import { SxProps } from '@mui/system';
import { Link, Typography } from '@mui/material';

interface Prop {
    sx: SxProps
};

const Copyright = ({ sx }: Prop) => 
{
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={ sx }>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            { new Date().getFullYear() }
            {'.'}
        </Typography>
    );
}

export default Copyright;