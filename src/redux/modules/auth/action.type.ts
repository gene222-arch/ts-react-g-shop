import { LoginErrorResponse, LoginPayload, LoginSuccessResponse } from "../../../types/api-responses/LoginApiResponse";
import { RegisterPayload } from "../../../types/api-responses/RegisterApiResponse";

export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCEEDED = 'SIGN_OUT_SUCCEEDED';
export const SIGN_OUT_FAILED = 'SIGN_OUT_FAILED';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCEEDED = 'SIGN_UP_SUCCEEDED';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export type ActionType =   
    | { type: undefined } // Redux action requires <State, Action<any> = An action must be both exists and not in an object
    | { type: typeof SIGN_IN_START, payload: LoginPayload }
    | { type: typeof SIGN_IN_SUCCEEDED, payload: LoginSuccessResponse }
    | { type: typeof SIGN_IN_FAILED, payload: LoginErrorResponse }
    | { type: typeof SIGN_OUT_START }
    | { type: typeof SIGN_OUT_SUCCEEDED }
    | { type: typeof SIGN_OUT_FAILED, payload: any }
    | { type: typeof SIGN_UP_START, payload: RegisterPayload }
    | { type: typeof SIGN_UP_SUCCEEDED }
    | { type: typeof SIGN_UP_FAILED, payload: any };