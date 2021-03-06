import { LoginErrorResponse, LoginPayload, LoginSuccessResponse } from "../../../types/api-responses/LoginApiResponse";
import { RegisterErrorResponse, RegisterPayload, RegisterSuccessResponse } from "../../../types/api-responses/RegisterApiResponse";
import { 
    ActionType,
    SIGN_IN_START,
    SIGN_IN_SUCCEEDED,
    SIGN_IN_FAILED,
    SIGN_OUT_START,
    SIGN_OUT_SUCCEEDED,
    SIGN_OUT_FAILED,
    SIGN_UP_START,
    SIGN_UP_SUCCEEDED,
    SIGN_UP_FAILED,
    CLEAR_AUTH_ERROR
} from "./action.type";

export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR
});


export const signInStart = (payload: LoginPayload): ActionType => ({
    type: SIGN_IN_START,
    payload
});

export const signInSucceeded = (payload: LoginSuccessResponse): ActionType => ({
    type: SIGN_IN_SUCCEEDED,
    payload
});

export const signInFailed = (errorMessage: LoginErrorResponse): ActionType => ({
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

export const signUpStart = (payload: RegisterPayload): ActionType => ({
    type: SIGN_UP_START,
    payload
});

export const signUpSucceeded = (): ActionType => ({
    type: SIGN_UP_SUCCEEDED
});

export const signUpFailed = (errorMessage: RegisterErrorResponse): ActionType => ({
    type: SIGN_UP_FAILED,
    payload: errorMessage
});