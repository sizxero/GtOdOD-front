import * as Action from '../actions/ToDoAction';

const initialState = {
    todolist: null,
    targetTodo: null,
    todo: { ctgId: '', title: '', done: false,}
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.DISPATCH_TODOLIST: {
            return {
                ...state,
                todolist: action.todolist,
            }
        }
        case Action.WRITE_TODO: {
            return {
                ...state,
                todo: {ctgId: state.todo.ctgId, title: action.ttitle, done: state.todo.done}
            }
        }
        case Action.SELECT_CTG: {
            return {
                ...state,
                todo: {ctgId: action.tctg, title: state.todo.title, done: state.todo.done}
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;