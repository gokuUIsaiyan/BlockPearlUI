import {FETCH_CHART_DATA_BEGIN, FETCH_CHART_DATA_FAILURE, FETCH_CHART_DATA_SUCCESS} from "../../types";
import {GetBuyChartData, GetNetChartData, GetSellChartData, GetVolumeChartData} from "../../../api/queries";

export function fetchChartData({time, pair, token, type, min, max}) {
    console.log(time, pair, token, type, min, max)
    return (dispatch) => {
        dispatch({
            type: FETCH_CHART_DATA_BEGIN
        });

        return new Promise((resolve, reject) => {
            switch (type) {
                case 'net':
                    GetNetChartData(time, pair, token, min, max).then(r => {
                        dispatch({
                            type: FETCH_CHART_DATA_SUCCESS,
                            data: r
                        });
                        return resolve(r)
                    }).catch((error) => {
                        dispatch({
                            type: FETCH_CHART_DATA_FAILURE
                        });
                        console.log(error);
                        return reject(error.message || error);
                    });
                    break;
                case 'volume':
                    GetVolumeChartData(time, pair, token, min, max).then(r => {
                        dispatch({
                            type: FETCH_CHART_DATA_SUCCESS,
                            data: r
                        });
                        resolve()
                    }).catch((error) => {
                        dispatch({
                            type: FETCH_CHART_DATA_FAILURE
                        });
                        console.log(error);
                        return reject(error.message || error);

                    });
                    break;
                case 'buy':
                    GetBuyChartData(time, pair, token, min, max).then(r => {
                        dispatch({
                            type: FETCH_CHART_DATA_SUCCESS,
                            data: r
                        });
                        resolve()
                    }).catch((error) => {
                        dispatch({
                            type: FETCH_CHART_DATA_FAILURE
                        });
                        console.log(error);
                        return reject(error.message || error);

                    });
                    break;
                case 'sell':
                    GetSellChartData(time, pair, token, min, max).then(r => {
                        dispatch({
                            type: FETCH_CHART_DATA_SUCCESS,
                            data: r
                        });
                        resolve()
                    }).catch((error) => {
                        dispatch({
                            type: FETCH_CHART_DATA_FAILURE
                        });
                        console.log(error);
                        return reject(error.message || error);
                    });
                    break;
            }
        })
    }
}
