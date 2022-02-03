import { all, take, put, call } from 'redux-saga/effects';
import { 
    AddToCartPayload, 
    TOGGLE_ADD_TO_CART_START, 
    CLEAR_USER_CART_START, 
    GET_CARTS_START, 
    ClearUserCartPayload
} from './action.type';
import { getErrorMessage } from '../../../utils/error.handling';
import { 
    clearUserCartSucceeded,
    clearUserCartFailed,
    getCartsFailed, 
    getCartsSucceeded,
    toggleAddToCartSucceeded,
    toggleAddToCartFailed,
} from './action.creator';

function* clearUserCartSaga(payload: ClearUserCartPayload) {
    try {
        yield put(clearUserCartSucceeded(payload));
    } catch (error: unknown) {
        yield put(clearUserCartFailed(getErrorMessage(error)));
    }
}

function* toggleAddToCartSaga(payload: AddToCartPayload) {
    try {
        yield put(toggleAddToCartSucceeded(payload));
    } catch (error: unknown) {
        yield put(toggleAddToCartFailed(getErrorMessage(error)));
    }
}

function* getCartsSaga() {
    try {
        yield put(getCartsSucceeded([]));
    } catch (error: unknown) {
        yield put(getCartsFailed(getErrorMessage(error)));
    }
}

function* clearUserCartWatcher() {
    while (true) {
        const { payload } = yield take(CLEAR_USER_CART_START);
        yield call(clearUserCartSaga, payload);
    }
}

function* toggleAddToCartWatcher() {
    while (true) {
        const { payload } = yield take(TOGGLE_ADD_TO_CART_START);
        yield call(toggleAddToCartSaga, payload);
    }
}

function* getCartsWatcher() {
    while (true) {
        yield take(GET_CARTS_START);
        yield call(getCartsSaga);
    }
}

export default function* ()
{
    yield all([
        clearUserCartWatcher(),
        getCartsWatcher(),
        toggleAddToCartWatcher()
    ]);
}