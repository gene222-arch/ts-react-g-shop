import { AnyAction } from 'redux';
import { createReduxHistoryContext } from "redux-first-history";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import storage from 'redux-persist/lib/storage';
import { browserHistory } from '../utils/browser.history';
import alert from './modules/alert/reducer';
import auth from './modules/auth/reducer';
import cart from './modules/cart/reducer';
import confirmationDialog from './modules/confirmation-dialog/reducer';
import store from './modules/store/reducer';
import wishList from './modules/wishlist/reducer';

const { routerReducer } = createReduxHistoryContext({
    history: browserHistory
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
};

const reducers = {
    router: routerReducer,
    alert,
    auth,
    confirmationDialog,
    cart,
    store,
    wishList
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

const rootReducer = (state: any, action: AnyAction) =>
{
    if (action.type === 'LOGOUT_SUCCEEDED') {
        storage.removeItem('persist:root');
    }

    return persistedReducer(state, action);
}

export default rootReducer;