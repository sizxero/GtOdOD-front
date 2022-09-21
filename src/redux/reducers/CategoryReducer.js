import * as Action from '../actions/CategoryAction';

const initialState = {
    newCategory: { title: '', color: ''},
    categories: null,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.DISPATCH_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        case Action.WRITE_CTG: {
            return {
                ...state,
                newCategory: { title: action.ctitle, color: state.newCategory.color }
            }
        }
        case Action.SELECT_COLOR: {
            return {
                ...state,
                newCategory: { title: state.newCategory.title, color: action.ccolor }
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;