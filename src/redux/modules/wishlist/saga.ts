import { all, take, put, call } from 'redux-saga/effects';
import { TOGGLE_ADD_TO_WISHLIST_START, GET_WISHLIST_BY_USER_ID_START, AddToWishListPayload } from './action.type';
import { getErrorMessage } from '../../../utils/error.handling';
import { 
    toggleAddToWishListSucceeded,
    toggleAddToWishListFailed,
    getWishListByUserIdFailed, 
    getWishListByUserIdSucceeded
} from './action.creator';

function* toggleAddToWishListSaga(payload: AddToWishListPayload) {
    try {
        yield put(toggleAddToWishListSucceeded(payload));
    } catch (error: unknown) {
        yield put(toggleAddToWishListFailed(getErrorMessage(error)));
    }
}

function* getWishListByUserIdSaga(userId: number) {
    try {
        yield put(getWishListByUserIdSucceeded(userId));
    } catch (error: unknown) {
        yield put(getWishListByUserIdFailed(getErrorMessage(error)));
    }
}

function* toggleAddToWishListWathcer() {
    while (true) {
        const { payload } = yield take(TOGGLE_ADD_TO_WISHLIST_START);
        yield call(toggleAddToWishListSaga, payload);
    }
}

function* getWishListByUserIdWatcher() {
    while (true) {
        const { payload } = yield take(GET_WISHLIST_BY_USER_ID_START);
        yield call(getWishListByUserIdSaga, payload);
    }
}

export default function* ()
{
    yield all([
        toggleAddToWishListWathcer(),
        getWishListByUserIdWatcher(),
    ]);
}