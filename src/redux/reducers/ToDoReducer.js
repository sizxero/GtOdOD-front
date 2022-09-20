import * as Action from '../actions/ToDoAction';

const initialState = {
    todolist: [
        {id: 0, title: 'hello world 1', done: true},
        {id: 1, title: 'hello world 2', done: false},
        {id: 2, title: 'hello world 3', done: true},
    ],
    targetTodo: null,
    todo: { ctg: '', title: '', done: false,}
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.WRITE_TODO: {
            return {
                ...state,
                todo: {ctg: state.todo.ctg, title: action.ttitle, done: state.todo.done}
            }
        }
        case Action.SELECT_CTG: {
            return {
                ...state,
                todo: {ctg: action.tctg, title: state.todo.title, done: state.todo.done}
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;