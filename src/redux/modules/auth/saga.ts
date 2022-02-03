import { all, take, put, call } from 'redux-saga/effects';
import { push } from 'redux-first-history'
import { Credentials, SIGN_IN_START, SIGN_OUT_START, SIGN_UP_START } from './action.type';
import { getErrorMessage } from './../../../utils/error.handling';
import { 
    signInFailed, 
    signInSucceeded, 
    signOutFailed, 
    signOutSucceeded, 
    signUpFailed, 
    signUpSucceeded
} from './action.creator';
import { User } from '../../../types/states/AuthState';
import { SIGN_IN_PATH, STORE_PATH } from '../../../routes/paths';

function* signInSaga(credentials: Credentials) {
    try {
        yield put(signInSucceeded(credentials));
        yield put(push(STORE_PATH));
    } catch (error: unknown) {
        yield put(signInFailed(getErrorMessage(error)));
    }
}

function* signOutSaga() {
    try {
        yield put(signOutSucceeded());
        yield put(push(SIGN_IN_PATH));
    } catch (error: unknown) {
        yield put(signOutFailed(getErrorMessage(error)));
    }
}

function* signUpSaga(user: User) {
    try {
        yield put(signUpSucceeded(user));
        yield put(push(STORE_PATH));
    } catch (error: unknown) {
        yield put(signUpFailed(getErrorMessage(error)));
    }
}

function* signOutWatcher() {
    while (true) {
        yield take(SIGN_OUT_START);
        yield call(signOutSaga);
    }
}

function* signInWatcher() {
    while (true) {
        const { payload } = yield take(SIGN_IN_START);
        yield call(signInSaga, payload);
    }
}

function* signUpWatcher() {
    while (true) {
        const { payload } = yield take(SIGN_UP_START);
        yield call(signUpSaga, payload);
    }
}

export default function* ()
{
    yield all([
        signInWatcher(),
        signOutWatcher(),
        signUpWatcher()
    ]);
}