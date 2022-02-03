import { HIDE_ALERT, Payload, SHOW_ALERT } from "./action.types";

export const showAlert = (payload: Payload) => ({
    type: SHOW_ALERT,
    payload
});

export const hideAlert = () => ({
    type: HIDE_ALERT
});