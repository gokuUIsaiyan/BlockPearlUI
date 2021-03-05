import {useCallback} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {fetchChartData} from "../../actions/vault/fetchChartData";

export function useFetchChartData() {
    const dispatch = useDispatch();

    const {chartData, fetchChartDataPending} = useSelector(
        (state) => ({
            chartData: state.vault.chartData,
            fetchChartDataPending: state.vault.chartData,
         }),
        shallowEqual,
    );

    const boundAction = useCallback(
        (data) => {
            return dispatch(fetchChartData(data));
        },
        [dispatch],
    );

    return {
        chartData,
        fetchChartData: boundAction,
        fetchChartDataPending,
    };
}
