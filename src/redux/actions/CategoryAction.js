// Action type
export const DISPATCH_CATEGORIES = 'DISPATCH_CATEGORIES';
export const WRITE_CATEGORY = 'WRITE_CATEGORY';
export const SELECT_COLOR = 'SELECT_COLOR';

// Action creators
const dispatchCategories = (categories) => {
    return {
        type: 'DISPATCH_CATEGORIES',
        categories: categories
    }
}

const writeCategory = (ctitle) => {
    return {
        type: 'WRITE_CATEGORIES',
        ctitle: ctitle,
    }
}

const selectColor = (ccolor) => {
    return {
        type: 'SELECT_COLOR',
        ccolor: ccolor,
    }
}