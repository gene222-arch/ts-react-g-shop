import { AlertState } from "../../../types/states/AlertState";

export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export type Payload = Pick<AlertState, "message" | "status" | "anchorOrigin">;

export type ActionType =
    | { type: typeof SHOW_ALERT, payload: Payload }
    | { type: typeof HIDE_ALERT };
