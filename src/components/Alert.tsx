import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { createStructuredSelector } from 'reselect';
import { alertSelector } from './../redux/modules/alert/selectors';
import { connect, useDispatch } from 'react-redux';
import { AlertState } from '../types/states/AlertState';
import { hideAlert } from '../redux/modules/alert/action.creators';

interface Prop {
    alertState: AlertState
}

const Alert = ({ alertState }: Prop) => 
{
    const dispatch = useDispatch();

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => 
    {
        if (reason === "clickaway") return;

        dispatch(hideAlert());
    };

    return (
        <Snackbar
            open={ alertState.show }
            autoHideDuration={ 6000 }
            onClose={ handleClose }
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
        >
            <MuiAlert 
                onClose={ handleClose } 
                severity={ alertState.status } 
                sx={{ width: '100%' }}

            >
                { alertState.message }
            </MuiAlert>
        </Snackbar>
    );
};

const mapStateToProps = createStructuredSelector({
    alertState: alertSelector
});
    
export default connect(mapStateToProps)(Alert);