import { createSelector } from "reselect";
import { RootState } from "../../../types/states/RootState";

const selectAlert = (state: RootState) => state.alert;

export const alertSelector = createSelector(
    selectAlert, 
    alert => alert
);