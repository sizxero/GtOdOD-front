// Action type
export const DISPATCH_CATEGORIES = 'DISPATCH_CATEGORIES';
export const WRITE_CTG = 'WRITE_CTG';
export const SELECT_COLOR = 'SELECT_COLOR';

// Action creators
export const dispatchCategories = (categories) => {
    return {
        type: 'DISPATCH_CATEGORIES',
        categories: categories
    }
}

export const writeCategory = (ctitle) => {
    return {
        type: 'WRITE_CTG',
        ctitle: ctitle,
    }
}

export const selectColor = (ccolor) => {
    return {
        type: 'SELECT_COLOR',
        ccolor: ccolor,
    }
}