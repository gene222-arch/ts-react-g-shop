import { Checkbox, Paper, Grid, FormControlLabel, Button } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useDispatch, connect } from 'react-redux';
import { toggleAddAllToCheckout } from '../../redux/modules/cart/action.creator';
import { createStructuredSelector } from 'reselect';
import { userSelector } from './../../redux/modules/auth/selector';
import { User } from '../../types/states/AuthState';
import { showConfirmationDialog } from './../../redux/modules/confirmation-dialog/action.creators';
import { clearUserCartStart } from './../../redux/modules/cart/action.creator';
import { showAlert } from './../../redux/modules/alert/action.creators';

interface Prop {
    itemsCount: number,
    userState: User
};

const ListHeaderOperations = ({ itemsCount, userState }: Prop) => 
{
    const dispatch = useDispatch();

    const handleToggleAddAllToCheckout = () => 
    {
        dispatch(toggleAddAllToCheckout({
            user: userState
        }));
    };

    const handleClickClearCart = () =>
    {
        dispatch(showConfirmationDialog({
            title: "Are you sure to clear your cart?",
            body: "Once you`ve confirm, there won`t be a asdas",
            confirmCallback: () => 
            {
                dispatch(clearUserCartStart({
                    user: userState
                }));
                dispatch(showAlert({
                    message: "Cart cleared successfully",
                    status: "success"
                }));
            }
        }));
    };

    return (
        <Paper>
            <Grid container spacing={1} justifyContent="space-between" p={ 1 }>
                <Grid item>
                    <FormControlLabel 
                        control={
                            <Checkbox onChange={ handleToggleAddAllToCheckout } />
                        } 
                        label={ `SELECT ALL (${ itemsCount } ITEMS)` } 
                    />
                </Grid>
                <Grid item>
                    <Button variant="text" onClick={ handleClickClearCart }>
                        <RemoveCircleIcon color="error"/>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

const mapStateToProps = createStructuredSelector({
    userState: userSelector
});

export default connect(mapStateToProps)(ListHeaderOperations);
