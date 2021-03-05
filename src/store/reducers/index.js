import {combineReducers} from 'redux';
import walletReducer from './wallet/reducer';
import vaultReducer from './vault/reducer';

export default combineReducers({
    wallet: walletReducer,
    vault: vaultReducer,
});
