// Action type
export const DISPATCH_TODOLIST = 'DISPATCH_TODOLIST';
export const DISPATCH_TODO_TARGET = 'DISPATCH_TODO_TARGET';
export const DISPATCH_TARGET_DATE = 'DISPATCH_TARGET_DATE';
export const WRITE_TODO= 'WRITE_TODO';
export const SELECT_DATE= 'SELECT_DATE';
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

export const dispatchTargetDate = (date) => {
    return {
        type: 'DISPATCH_TARGET_DATE',
        date: date,
    }
}

export const writeToDo = (ttitle) => {
    return {
        type: 'WRITE_TODO',
        ttitle: ttitle,
    }
}

export const selectDate = (date) => {
    return {
        type: 'SELECT_DATE',
        tdate: date
    }
}

export const selectCtg = (tctg) => {
    return {
        type: 'SELECT_CTG',
        tctg: tctg,
    }
}