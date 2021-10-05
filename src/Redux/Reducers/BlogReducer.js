import { ActionType } from "../ActionType";


export const getFilterBlog = (state = {
    blog: []
}, action) => {
    switch (action.type) {
        case ActionType.GET_FILTER_BLOG:
            return { ...state, blog: action.payload };
        default:
            return state;
    }
}

export const getOneBlog = (state = {
    blog: {}
}, action) => {
    switch (action.type) {
        case ActionType.GET_ONE_BLOG:
            return { ...state, blog: action.payload };
        default:
            return state;
    }
}


export const getAllBlog = (state = {
    blogs: []
}, action) => {
    switch (action.type) {
        case ActionType.GET_ALL_BLOGS:
            return { ...state, blogs: action.payload };
        default:
            return state;
    }
}
