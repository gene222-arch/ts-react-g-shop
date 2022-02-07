type position = 'top' | 'bottom' | 'left' | 'right';

export type AlertState = {
    anchorOrigin?: {
        vertical?: position,
        horizontal?: position
    },
    show: boolean,
    message: string,
    status: "success" | "info" | "warning" | "error"
};