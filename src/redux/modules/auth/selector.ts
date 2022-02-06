import { createSelector } from "reselect";
import { RootState } from "../../../types/states/RootState";

const selectAuth = (state: RootState) => state.auth;
const selectError = (state: RootState) => state.auth.error;

export const selectUser = (state: RootState) => state.auth.user;

export const authSelector = createSelector(selectAuth, auth => auth);

export const userSelector = createSelector(selectUser, user => user);

export const authErrorSelector = createSelector(selectError, error => error);