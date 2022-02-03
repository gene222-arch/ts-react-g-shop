import { AlertColor } from "@mui/material";

export type AlertState = {
    show: boolean,
    message: string,
    status: "success" | "info" | "warning" | "error"
};