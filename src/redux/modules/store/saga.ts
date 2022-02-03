import { all, take, put, call } from 'redux-saga/effects';
import { push } from 'redux-first-history'
import { GET_PRODUCTS_START } from './action.type';
import { getErrorMessage } from '../../../utils/error.handling';
import { 
    getProductsFailed, 
    getProductsSucceeded
} from './action.creator';
import * as api from './../../../apis/product';
import { Product } from '../../../types/states/StoreState';

function* getProductsSaga(limit: number | null) {
    try {
        const data: Product[] = yield call(api.index, limit);
        yield put(getProductsSucceeded(data));
    } catch (error: unknown) {
        yield put(getProductsFailed(getErrorMessage(error)));
    }
}

function* getProductsWatcher() {
    while (true) {
        const { payload } = yield take(GET_PRODUCTS_START);
        yield call(getProductsSaga, payload);
    }
}

export default function* ()
{
    yield all([
        getProductsWatcher(),
    ]);
}