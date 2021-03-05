import {
    Summary_Table,
    FETCH_BALANCES_BEGIN,
    FETCH_BALANCES_FAILURE,
    FETCH_BALANCES_SUCCESS
} from "../../types";
import {MultiCall} from 'eth-multicall';
import {erc20ABI} from '../../../contracts/ABI';
import tokens from '../../../contracts/tokens'

export function fetchBalances({addresses, web3,table}) {
    return (dispatch) => {
        dispatch({
            type: FETCH_BALANCES_BEGIN,
        });

        const promise = new Promise((resolve, reject) => {
            const multicall = new MultiCall(
                web3,
                '0x964c522313a8dd1f7c1d69f3528ae10ff52ff438',
            );
            const newTokens = []

            tokens.map((token) => {
                addresses.map((address) => {
                    newTokens.push({
                        id: token.id,
                        tokenAddress: token.tokenAddress,
                        address
                    })
                })
            })
            const calls = newTokens.map((token) => {
                const tokenContract = new web3.eth.Contract(
                    erc20ABI,
                    token.tokenAddress,
                );


                return {
                    token: token.id,
                    balance: tokenContract.methods.balanceOf(token.address),
                    address: token.address
                };
            });

            multicall
                .all([calls])
                .then((results) => {
                    const obj = {}
                    results[0].map((res) => {
                        if (obj[res.address]) {
                            obj[res.address][res.token] = res.balance || 0;
                        } else {
                            obj[res.address] = {
                                [res.token]: res.balance || 0
                            }
                        }

                    })
                    dispatch({
                        type: FETCH_BALANCES_SUCCESS,
                        path: table||Summary_Table,
                        data: obj
                    });
                }).catch((error) => {
                dispatch({
                    type: FETCH_BALANCES_FAILURE,
                });
                return reject(error.message || error);
            });
        });
        return promise;
    }
}
