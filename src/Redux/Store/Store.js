import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

import { getFilterBlog, getOneBlog, getAllBlog} from "../Reducers/BlogReducer";
import { RefreshReducer } from "../Reducers/RefreshReducer";

const mainReducer = combineReducers({
    FilterBlogStore: getFilterBlog,
    RefreshStore: RefreshReducer,
    getOneBlogStore :getOneBlog,
    getAllBlogStore: getAllBlog
})

const composeEnhancher = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(mainReducer, composeEnhancher(applyMiddleware(thunk)));