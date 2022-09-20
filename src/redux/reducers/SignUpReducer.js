import * as Action from '../actions/SignUpAction';

const initialState = {
    id: '',
    pw: '',
    pwre: '',
    name: '',
    nick: '',
    pwchk: false,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.WRITE_ID_SIGNUP: {
            return {
                ...state,
                id: action.id
            }
        }
        case Action.WRITE_PW_SIGNUP: {
            return {
                ...state,
                pw: action.pw
            }
        }
        case Action.WRITE_PW_RE_SIGNUP: {
            return {
                ...state,
                pwre: action.pwre,
                pwchk: state.pw === action.pwre,
            }
        }
        case Action.WRITE_NAME_SIGNUP: {
            return {
                ...state,
                name: action.name
            }
        }
        case Action.WRITE_NICK_SIGNUP: {
            return {
                ...state,
                nick: action.nick
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;