import {FETCH_BALANCES_BEGIN, FETCH_BALANCES_FAILURE, FETCH_BALANCES_SUCCESS} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case FETCH_BALANCES_BEGIN:
            return {
                ...state,
                fetchBalancesPending: true,
            };

        case FETCH_BALANCES_FAILURE:
            return {
                ...state,
                fetchBalancesPending: false,
            };

        case FETCH_BALANCES_SUCCESS:
            return {
                ...state,
                [action.path]: action.data,
                fetchBalancesPending: false,
            };

        default:
            return state;
    }
};
