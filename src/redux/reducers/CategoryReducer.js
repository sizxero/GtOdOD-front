import * as Action from '../actions/CategoryAction';

const initialState = {
    newCategory: { title: '', color: ''},
    categories: [{id: '1', title: '공부', color: "$GtOdOD_red"},{id: '2', title: '개발', color: "$GtOdOD_pink"}],
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
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