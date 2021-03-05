import {FETCH_CHART_DATA_BEGIN, FETCH_CHART_DATA_FAILURE, FETCH_CHART_DATA_SUCCESS} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case FETCH_CHART_DATA_BEGIN:
            return {
                ...state,
                fetchChartDataPending: true,
            };

        case FETCH_CHART_DATA_FAILURE:
            return {
                ...state,
                fetchChartDataPending: false,
            };

        case FETCH_CHART_DATA_SUCCESS:
            return {
                ...state,
                chartData:action.data,
                fetchChartDataPending: false,
            };

        default:
            return state;
    }
};
