// Action type
export const DISPATCH_TODOLIST = 'DISPATCH_TODOLIST';
export const DISPATCH_TODO_TARGET = 'DISPATCH_TODO_TARGET';
export const WRITE_TODO= 'WRITE_TODO';
export const REWRITE_TODO= 'REWRITE_TODO';
export const SELECT_CTG = 'SELECT_CTG';

// Action creators
const dispatchToDoList = (todolist) => {
    return {
        type: 'DISPATCH_TODOLIST',
        todolist: todolist
    }
}

const dispatchToDoTarget = (target) => {
    return {
        type: 'DISPATCH_TODOTARGET',
        target: target,
    }
}

const writeToDo = (ttitle) => {
    return {
        type: 'WRITE_CATEGORIES',
        ttitle: ttitle,
    }
}

const rewriteToDo = (ttitle_re) => {
    return {
        type: 'REWRITE_TODO',
        ttitle_re: ttitle_re
    }
}

const selectCtg = (tctg) => {
    return {
        type: 'SELECT_COLOR',
        tctg: tctg,
    }
}