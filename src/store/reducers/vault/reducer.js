import fetchBalances from "./fetchBalances";
import fetchChartData from "./fetchChartData";
import initialState from "./initialState";

const reducers = [fetchBalances,fetchChartData];

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
