import Web3 from 'web3';
import {
    HOME_ACCOUNTS_CHANGED,
    HOME_CONNECT_WALLET_BEGIN,
    HOME_CONNECT_WALLET_FAILURE,
    HOME_CONNECT_WALLET_SUCCESS,
    HOME_NETWORK_CHANGED,
} from '../../types';
import {disconnectWallet} from './disconnetWallet';

export function connectWallet(web3Modal) {
    return async (dispatch) => {
        dispatch({type: HOME_CONNECT_WALLET_BEGIN});
        try {
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            web3.eth.extend({
                methods: [
                    {
                        name: 'chainId',
                        call: 'eth_chainId',
                        outputFormatter: web3.utils.hexToNumber,
                    },
                ],
            });
            const subscribeProvider = (provider) => {
                if (!provider.on) {
                    return;
                }
                provider.on('close', () => {
                    dispatch(disconnectWallet(web3, web3Modal));
                });
                provider.on('disconnect', async () => {
                    dispatch(disconnectWallet(web3, web3Modal));
                });
                provider.on('accountsChanged', async (accounts) => {
                    if (accounts[0]) {
                        dispatch({type: HOME_ACCOUNTS_CHANGED, data: accounts[0]});
                    } else {
                        dispatch(disconnectWallet(web3, web3Modal));
                    }
                });
                provider.on('chainChanged', async (chainId) => {
                    const networkId = web3.utils.isHex(chainId)
                        ? web3.utils.hexToNumber(chainId)
                        : chainId;
                    dispatch({type: HOME_NETWORK_CHANGED, data: networkId});
                });
            };
            subscribeProvider(provider);

            const accounts = await web3.eth.getAccounts();
            const address = accounts[0];
            const networkId = await web3.eth.net.getId();
            dispatch({
                type: HOME_CONNECT_WALLET_SUCCESS,
                data: {web3, address, networkId},
            });
        } catch (error) {
            dispatch({type: HOME_CONNECT_WALLET_FAILURE});
        }
    };
}
