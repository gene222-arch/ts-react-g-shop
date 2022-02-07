import FacebookIcon from '@mui/icons-material/Facebook';
import Facebook from 'react-facebook-login/dist/facebook-login-render-props';
import { Button } from '@mui/material';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

interface Prop {
    disabled: boolean,
    handleFacebookResponse: (response: ReactFacebookLoginInfo) => void; 
};

const FacebookLogin = ({ disabled = false, handleFacebookResponse }: Prop) => 
{
    const handleResponseFacebook = (response: ReactFacebookLoginInfo) => {
        handleFacebookResponse(response);
    };

    return (
        <Facebook
            appId="632988464609771"
            fields="name,email,picture"
            callback={ handleResponseFacebook }
            render={renderProps => (
                <Button 
                    onClick={ renderProps.onClick } 
                    variant="contained" 
                    color="info"
                    fullWidth
                    disabled={ disabled }
                >
                   <FacebookIcon />
                </Button>
            )}
        />
    );
};

export default FacebookLogin;
