import { ActionType } from "../ActionType";

export const Refesh = (number, component) => async (dispatch, Store) => {
    console.log(component,"===Refesh");
    const { num } = Store().RefreshStore;
    try {
        dispatch({
            type: ActionType.REFRESH,
            payload: num + number
        })
    } catch (error) {

    }
}