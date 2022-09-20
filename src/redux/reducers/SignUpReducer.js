import * as Action from '../actions/SignUpAction';

const initialState = {
    id: '',
    pw: '',
    name: '',
    nick: '',
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        
        default: {
            return state;
        }
    }
}

export default reducers;