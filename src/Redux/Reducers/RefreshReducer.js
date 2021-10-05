import { ActionType } from "../ActionType";

export const RefreshReducer = (state = { num: 1 }, action) => {
    switch (action.type) {
        case ActionType.REFRESH:
            return { ...state, num: action.payload };
        default:
            return state;
    }
}