export const SHOW_CONFIRMATION_DIALOG = 'SHOW_CONFIRMATION_DIALOG';
export const HIDE_CONFIRMATION_DIALOG = 'HIDE_CONFIRMATION_DIALOG';

export type Payload = {
    title: string,
    body: string,
    confirmText?: string | undefined,
    refuseText?: string | undefined,
    confirmCallback?: (() => void) | undefined
};

export type ActionType = 
    | { type: typeof SHOW_CONFIRMATION_DIALOG, payload: Payload }
    | { type: typeof HIDE_CONFIRMATION_DIALOG };
