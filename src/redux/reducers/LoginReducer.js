import * as Action from '../actions/LoginAction';

const initialState = {
    id: '',
    pw: '',
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.LOGIN: {
            return state
        }

        case Action.WRITE_ID_LOGIN: {
            return {
                ...state,
                id: action.id
            }
        }
        case Action.WRITE_PW_LOGIN: {
            return {
                ...state,
                pw: action.pw
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;