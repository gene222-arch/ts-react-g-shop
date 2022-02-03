import { HIDE_CONFIRMATION_DIALOG, Payload, SHOW_CONFIRMATION_DIALOG } from "./action.types";

export const showConfirmationDialog = (payload: Payload) => ({
    type: SHOW_CONFIRMATION_DIALOG,
    payload
});

export const hideConfirmationDialog = () => ({
    type: HIDE_CONFIRMATION_DIALOG,
});