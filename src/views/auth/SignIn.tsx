import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Copyright from '../../components/auth/Copyright';
import Links from '../../components/auth/Links';
import Wallpaper from '../../components/auth/Wallpaper';
import { useDispatch } from 'react-redux';
import { signInStart, signUpStart } from './../../redux/modules/auth/action.creator';
import FacebookLogin from '../../components/soc-med-sign-in/FacebookLogin';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import { User } from '../../types/states/AuthState';

const SignIn = () => 
{
    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get('email') as string;
        const password = data.get('password') as string;

        dispatch(signInStart({ email, password }));
    };

    const handleFacebookResponse = (response: ReactFacebookLoginInfo) => 
    {
        if (response) 
        {
            const user: User = { 
                id: Date.now(),
                name: response.name as string,
                email: response.email as string, 
                password: response.userID as string,
                picture: response.picture
            };

            dispatch(signUpStart(user));
        }
    }
    
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Wallpaper />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box 
                        component="form" 
                        noValidate 
                        onSubmit={ onSubmit } 
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <FacebookLogin handleFacebookResponse={ handleFacebookResponse } />
                        <Links />
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignIn;