import { User } from "../../../types/states/AuthState";
import { 
    ActionType,
    Credentials,
    SIGN_IN_START,
    SIGN_IN_SUCCEEDED,
    SIGN_IN_FAILED,
    SIGN_OUT_START,
    SIGN_OUT_SUCCEEDED,
    SIGN_OUT_FAILED,
    SIGN_UP_START,
    SIGN_UP_SUCCEEDED,
    SIGN_UP_FAILED
} from "./action.type";

export const signInStart = (payload: Credentials): ActionType => ({
    type: SIGN_IN_START,
    payload
});

export const signInSucceeded = (payload: Credentials): ActionType => ({
    type: SIGN_IN_SUCCEEDED,
    payload
});

export const signInFailed = (errorMessage: any): ActionType => ({
    type: SIGN_IN_FAILED,
    payload: errorMessage
});

export const signOutStart = (): ActionType => ({
    type: SIGN_OUT_START
});

export const signOutSucceeded = (): ActionType => ({
    type: SIGN_OUT_SUCCEEDED
});

export const signOutFailed = (errorMessage: any): ActionType => ({
    type: SIGN_OUT_FAILED,
    payload: errorMessage
});

export const signUpStart = (payload: User): ActionType => ({
    type: SIGN_UP_START,
    payload
});

export const signUpSucceeded = (payload: User): ActionType => ({
    type: SIGN_UP_SUCCEEDED,
    payload
});

export const signUpFailed = (errorMessage: any): ActionType => ({
    type: SIGN_UP_FAILED,
    payload: errorMessage
});