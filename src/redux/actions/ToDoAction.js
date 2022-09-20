// Action type
export const DISPATCH_TODOLIST = 'DISPATCH_TODOLIST';
export const DISPATCH_TODO_TARGET = 'DISPATCH_TODO_TARGET';
export const WRITE_TODO= 'WRITE_TODO';
export const REWRITE_TODO= 'REWRITE_TODO';
export const SELECT_CTG = 'SELECT_CTG';

// Action creators
export const dispatchToDoList = (todolist) => {
    return {
        type: 'DISPATCH_TODOLIST',
        todolist: todolist
    }
}

export const dispatchToDoTarget = (target) => {
    return {
        type: 'DISPATCH_TODO_TARGET',
        target: target,
    }
}

export const writeToDo = (ttitle) => {
    return {
        type: 'WRITE_TODO',
        ttitle: ttitle,
    }
}

export const rewriteToDo = (ttitle_re) => {
    return {
        type: 'REWRITE_TODO',
        ttitle_re: ttitle_re
    }
}

export const selectCtg = (tctg) => {
    return {
        type: 'SELECT_CTG',
        tctg: tctg,
    }
}