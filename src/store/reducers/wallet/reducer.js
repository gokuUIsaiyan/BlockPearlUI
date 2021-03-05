import connectWallet from './connectWallet';
import disconnectWallet from './disconnectWallet';

const reducers = [connectWallet, disconnectWallet];

const initialState = {
    address: '',
    web3: null,
    connected: false,
    networkId: Number(process.env.REACT_APP_NETWORK_ID),
};

console.log(initialState)

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // Handle cross-topic actions here
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action), newState);
}
