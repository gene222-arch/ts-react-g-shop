import { createSelector } from "reselect";
import { RootState } from "../../../types/states/RootState";

const selectConfirmationDialog = (state: RootState) => state.confirmationDialog;

export const confirmationDialogSelector = createSelector(
    selectConfirmationDialog, 
    confirmationDialog => confirmationDialog
);