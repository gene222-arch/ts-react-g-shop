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
import { useDispatch, connect } from 'react-redux';
import { signUpStart } from './../../redux/modules/auth/action.creator';
import { RegisterErrorResponse, RegisterPayload } from '../../types/api-responses/RegisterApiResponse';
import { createStructuredSelector } from 'reselect';
import { authErrorSelector } from '../../redux/modules/auth/selector';

interface Prop {
    authErrorState: Pick<RegisterErrorResponse, "message">
}

const SignUp = ({ authErrorState }: Prop) => 
{
    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const name = data.get('name') as string;
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        const passwordConfirmation = data.get('passwordConfirmation') as string;

        const user: RegisterPayload = {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        };

        dispatch(signUpStart(user));
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
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
                        Sign up
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
                            id="name"
                            label="First Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            error={ Boolean(authErrorState.message?.name) }
                            helperText={ authErrorState.message?.name }
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            type="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={ Boolean(authErrorState.message?.email) }
                            helperText={ authErrorState.message?.email }
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
                            error={ Boolean(authErrorState.message?.password) }
                            helperText={ authErrorState.message?.password }
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passwordConfirmation"
                            label="Confirm Password"
                            type="password"
                            id="passwordConfirmation"
                            autoComplete="current-password"
                            error={ Boolean(authErrorState.message?.password_confirmation) }
                            helperText={ authErrorState.message?.password_confirmation }
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
                            Create my account
                        </Button>
                        <Links />
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
            <Wallpaper />
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    authErrorState: authErrorSelector
});

export default connect(mapStateToProps)(SignUp);