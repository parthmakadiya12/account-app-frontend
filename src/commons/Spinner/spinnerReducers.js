import { types } from "./types";

export const spinnerReducerInitialState = {};

const spinnerReducer = (state = spinnerReducerInitialState, action) => {
    const actions = {
        [types.SHOW_SPINNER]: () => ({
            ...state,
            showSpinner: true
        }),
        [types.HIDE_SPINNER]: () => ({
            ...state,
            showSpinner: false
        })
    };

    if (actions[action.type]) {
        return actions[action.type]();
    }
    return state;
};

export default spinnerReducer;
