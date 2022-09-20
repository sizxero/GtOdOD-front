import * as Action from '../actions/ToDoAction';

const initialState = {
    todolist: null,
    targetTodo: null,
    todo: { ctg: '', title: '', done: '',}
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