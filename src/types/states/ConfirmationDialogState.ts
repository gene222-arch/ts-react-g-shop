export type ConfirmationDialogState = {
    show: boolean,
    title: string,
    body: string,
    confirmText?: string | undefined,
    refuseText?: string | undefined,
    confirmCallback?: (() => void) | undefined 
};