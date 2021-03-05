import {
    HOME_DISCONNECT_WALLET_BEGIN,
    HOME_DISCONNECT_WALLET_FAILURE,
    HOME_DISCONNECT_WALLET_SUCCESS,
} from '../../types/wallet';

export default (state, action) => {
    switch (action.type) {
        case HOME_DISCONNECT_WALLET_BEGIN:
            return {
                ...state,
                disconnectWalletPending: true,
            };

        case HOME_DISCONNECT_WALLET_SUCCESS:
            return {
                ...state,
                address: '',
                web3: null,
                connected: false,
                disconnectWalletPending: false,
            };
        case HOME_DISCONNECT_WALLET_FAILURE:
            return {
                ...state,
                web3: null,
                address: '',
                disconnectWalletPending: false,
            };

        default:
            return state;
    }
};
