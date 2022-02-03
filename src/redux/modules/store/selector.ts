import { createSelector } from "reselect";
import { RootState } from "../../../types/states/RootState";

const selectStore = (state: RootState) => state.store;

export const storeSelector = createSelector(selectStore, store => store);