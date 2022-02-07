import { all, take, put, call } from 'redux-saga/effects';
import { push } from 'redux-first-history'
import { SIGN_IN_START, SIGN_OUT_START, SIGN_UP_START } from './action.type';
import { getError, getErrorMessage } from './../../../utils/error.handling';
import { 
    signInFailed, 
    signInSucceeded, 
    signOutFailed, 
    signOutSucceeded, 
    signUpFailed, 
    signUpSucceeded
} from './action.creator';
import { SIGN_IN_PATH, STORE_PATH } from '../../../routes/paths';
import * as loginApi from './../../../apis/auth/login';
import * as registerApi from './../../../apis/auth/register';
import { LoginErrorResponse, LoginPayload, LoginSuccessResponse } from '../../../types/api-responses/LoginApiResponse';
import * as Cookies from '../../../utils/cookies';
import { RegisterErrorResponse, RegisterPayload, RegisterSuccessResponse } from '../../../types/api-responses/RegisterApiResponse';
import { showAlert } from '../alert/action.creators';

function* signInSaga(credentials: LoginPayload) {
    try {
        const result: LoginSuccessResponse = yield call(loginApi.login, credentials);
        const { data } = result
        
        Cookies.set('accessToken', data.access_token, data.expired_at);
        yield put(signInSucceeded(result));
        yield put(push(STORE_PATH));
    } catch (error: any) {
        const errorMessage: LoginErrorResponse = getErrorMessage(error);

        if (getError(errorMessage.message)) 
        {
            yield put(showAlert({
                status: "error",
                message: getError(errorMessage.message)
            }));
        }

        yield put(signInFailed(errorMessage));
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

function* signUpSaga(user: RegisterPayload) {
    try {
        const { data }: RegisterSuccessResponse = yield call(registerApi.register, user);

        Cookies.set('accessToken', data.access_token, data.expired_at);
        yield put(signUpSucceeded());
        yield put(push(SIGN_IN_PATH));
    } catch (error: any) {
        const errorMessage: RegisterErrorResponse = getErrorMessage(error);
        yield put(signUpFailed(errorMessage));
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