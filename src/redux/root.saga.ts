import { all } from "redux-saga/effects";
import auth from './modules/auth/saga';
import cart from './modules/cart/saga';
import store from './modules/store/saga';
import wishList from './modules/wishlist/saga';

function* rootSaga() 
{
    yield all([
        auth(),
        cart(),
        store(),
        wishList()
    ]);
}

export default rootSaga;