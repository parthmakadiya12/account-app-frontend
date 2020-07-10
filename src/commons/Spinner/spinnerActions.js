import { types } from "./types";

export const hideSpinner = () => {
    return {
        type: types.HIDE_SPINNER
    };
};

export const showSpinner = () => {
    return {
        type: types.SHOW_SPINNER
    };
};