import {useCallback} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {fetchBalances} from '../actions/vault/fetchBalances';

export function useFetchBalances() {
    const dispatch = useDispatch();

    const {balances_Summary_Table,balances_Signals_Table, fetchBalancesPending} = useSelector(
        (state) => ({
            fetchBalancesPending: state.vault.fetchBalancesPending,
            balances_Summary_Table: state.vault.balances_Summary_Table,
            balances_Signals_Table: state.vault.balances_Signals_Table
        }),
        shallowEqual,
    );

    const boundAction = useCallback(
        (data) => {
            return dispatch(fetchBalances(data));
        },
        [dispatch],
    );

    return {
        balances_Summary_Table,balances_Signals_Table,
        fetchBalances: boundAction,
        fetchBalancesPending,
    };
}
