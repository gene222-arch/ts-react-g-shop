import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createStructuredSelector } from 'reselect';
import { hideConfirmationDialog } from './../../redux/modules/confirmation-dialog/action.creators';
import { confirmationDialogSelector } from './../../redux/modules/confirmation-dialog/selectors';
import { connect, useDispatch } from 'react-redux';
import { ConfirmationDialogState } from './../../types/states/ConfirmationDialogState';

interface Prop {
    confirmationDialogState: ConfirmationDialogState
}

const ConfirmationDialog = ({ confirmationDialogState }: Prop) => 
{
    const dispatch = useDispatch();

    const { show, title, body, confirmText, refuseText } = confirmationDialogState;

    const handleClickClose = () => 
    {
        dispatch(hideConfirmationDialog());
    };

    const handleClickAgree = () =>
    {
        if (confirmationDialogState.confirmCallback) 
        {
            confirmationDialogState.confirmCallback();
            dispatch(hideConfirmationDialog());
        }

        // Do nothing
    };

    return (
        <Dialog
            open={ show }
            onClose={ handleClickClose }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">
                { title }
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    { body }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={ handleClickClose }>{ refuseText }</Button>
                <Button variant="contained" color="error" onClick={ handleClickAgree } autoFocus>{ confirmText }</Button>
            </DialogActions>
        </Dialog>
    );
};

const mapStateToProps = createStructuredSelector({
    confirmationDialogState: confirmationDialogSelector
});

export default connect(mapStateToProps)(ConfirmationDialog);
