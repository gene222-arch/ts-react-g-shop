import { ActionType, HIDE_ALERT, SHOW_ALERT } from './action.types';
import { AlertState } from '../../../types/states/AlertState';

const initialState: AlertState = 
{
    show: false,
    message: '',
    status: 'success'
};

const reducer = (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case SHOW_ALERT:
            return {
                ...action.payload,
                show: true
            };

        case HIDE_ALERT: 
            return {
                ...state,
                show: false,
                message: ""
            };

        default:
            return state;
    }
};

export default reducer;
