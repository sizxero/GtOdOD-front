import * as Action from '../actions/CategoryAction';

const initialState = {
    newCategory: { title: '', color: ''},
    categories: null,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        
        default: {
            return state;
        }
    }
}

export default reducers;