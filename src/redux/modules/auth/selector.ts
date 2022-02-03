import { createSelector } from "reselect";
import { RootState } from "../../../types/states/RootState";

const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;

export const authSelector = createSelector(selectAuth, auth => auth);

export const userSelector = createSelector(selectUser, user => user);