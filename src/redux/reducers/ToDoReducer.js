import * as Action from '../actions/ToDoAction';

const initialState = {
    todolist: [
        {id: 0, ctg: {title: '공부', color: '$GtOdOD_red'}, title: '정처기 실기 공부', done: true},
        {id: 1, ctg: {title: '개발', color: '$GtOdOD_pink'}, title: '투두리스트 화면 작성', done: true},
        {id: 2, ctg: {title: '개발', color: '$GtOdOD_pink'}, title: '리덕스 적용', done: false},
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