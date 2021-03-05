import {
    HOME_ACCOUNTS_CHANGED,
    HOME_CONNECT_WALLET_BEGIN,
    HOME_CONNECT_WALLET_FAILURE,
    HOME_CONNECT_WALLET_SUCCESS,
    HOME_NETWORK_CHANGED,
} from '../../types/wallet';

export default (state, action) => {
    switch (action.type) {
        case HOME_CONNECT_WALLET_BEGIN:
            return {
                ...state,
                connectWalletPending: true,
            };

        case HOME_CONNECT_WALLET_SUCCESS:
            return {
                ...state,
                web3: action.data.web3,
                address: process.env.ACCOUNT
                    ? process.env.ACCOUNT
                    : action.data.address,
                networkId: action.data.networkId,
                connected: true,
                connectWalletPending: false,
            };

        case HOME_NETWORK_CHANGED:
            return {
                ...state,
                networkId: action.data,
            };

        case HOME_ACCOUNTS_CHANGED:
            return {
                ...state,
                address: action.data,
            };
        case HOME_CONNECT_WALLET_FAILURE:
            return {
                ...state,
                connectWalletPending: false,
            };

        default:
            return state;
    }
};
