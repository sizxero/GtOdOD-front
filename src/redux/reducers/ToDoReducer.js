import { DAY_MARGIN } from '@mui/x-date-pickers/internals';
import * as Action from '../actions/ToDoAction';

const initialState = {
    todolist: null,
    targetTodo: null,
    todo: { ctgId: '', title: '', done: false, date: null},
    targetDate: null,
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
        case Action.DISPATCH_TODO_TARGET: {
            return {
                ...state,
                targetTodo: action.target,
            }
        }
        case Action.DISPATCH_TARGET_DATE: {
            return {
                ...state, 
                targetDate: action.date,
            }
        }
        case Action.SELECT_DATE: {
            return {
                ...state,
                todo: {ctgId: state.todo.ctgId, title: state.todo.title, done: state.todo.done, date: action.tdate}
            }
        }
        case Action.WRITE_TODO: {
            return {
                ...state,
                todo: {ctgId: state.todo.ctgId, title: action.ttitle, done: state.todo.done, date: state.todo.date}
            }
        }
        case Action.SELECT_CTG: {
            return {
                ...state,
                todo: {ctgId: action.tctg, title: state.todo.title, done: state.todo.done, date: state.todo.date}
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;