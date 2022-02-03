import { ActionType, HIDE_CONFIRMATION_DIALOG, SHOW_CONFIRMATION_DIALOG } from './action.types';
import { ConfirmationDialogState } from './../../../types/states/ConfirmationDialogState';

const initialState: ConfirmationDialogState = 
{
    show: false,
    title: '',
    body: '',
    confirmText: "Agree",
    refuseText: "Disagree",
    confirmCallback: () => {}
};

const reducer = (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case SHOW_CONFIRMATION_DIALOG:
            return { 
                ...state,
                show: true,
                ...action.payload
            };

        case HIDE_CONFIRMATION_DIALOG: 
            return {
                ...state,
                show: false
            };

        default:
            return state;
    }
};

export default reducer;
