// Action type
export const LOGIN = 'LOGIN';
export const WRITE_ID_SIGNUP = 'WRITE_ID_SIGNUP';
export const WRITE_PW_SIGNUP = 'WRITE_PW_SIGNUP';
export const WRITE_NAME_SIGNUP = 'WRITE_NAME_SIGNUP';
export const WRITE_NICK_SIGNUP = 'WRITE_NICK_SIGNUP';

// Action creators
export const clickLogin = () => {
    return {
        type: LOGIN,
    }
}

export const writeIdSignUp = (id) => {
    return {
        type: WRITE_ID_SIGNUP,
        id: id,
    }
}

export const writePwSignUp = (pw) => {
    return {
        type: WRITE_PW_SIGNUP,
        pw: pw,
    }
}

export const writeNameSignUp = (name) => {
    return {
        type: WRITE_NAME_SIGNUP,
        name: name,
    }
}

export const writeNickSignUp = (nick) => {
    return {
        type: WRITE_NICK_SIGNUP,
        nick: nick,
    }
}