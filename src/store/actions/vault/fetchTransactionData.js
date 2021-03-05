import {
    FETCH_TRANSACTION_DATA_BEGIN,
    FETCH_TRANSACTION_DATA_FAILURE,
    FETCH_TRANSACTION_DATA_SUCCESS
} from "../../types";
import {GetTransactions} from "../../../api/queries";

export function fetchTransactionData({pair, token, limit, offset, starting, sortBy}) {
    console.log(pair, token, limit, offset, starting, sortBy)
    return (dispatch) => {
        dispatch({
            type: FETCH_TRANSACTION_DATA_BEGIN
        });

        return new Promise((resolve, reject) => {
            GetTransactions(pair, token, limit, offset, starting, sortBy)
                .then((result)=> {
                    dispatch({
                        type: FETCH_TRANSACTION_DATA_SUCCESS,
                        data: result
                    })
                    resolve();
                })
                .catch((error) => {
                    dispatch({
                        type: FETCH_TRANSACTION_DATA_FAILURE
                    });
                    console.log(error);
                    return reject(error.message || error);
                })
            })
    }
}
