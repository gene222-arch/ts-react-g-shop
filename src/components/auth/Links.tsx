import { Grid, Link } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SIGN_IN_PATH, SIGN_UP_PATH } from './../../routes/paths';

const Links = () => 
{
    const { pathname } = useLocation();
    
    const isPageSignIn = pathname === SIGN_IN_PATH;
    const href = isPageSignIn ? SIGN_UP_PATH : SIGN_IN_PATH;
    const text = isPageSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In";

    return (
        <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href={ href } variant="body2">
                    { text }
                </Link>
            </Grid>
        </Grid>
    );
};

export default Links;
