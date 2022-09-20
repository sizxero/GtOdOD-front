import { combineReducers } from "redux";
import { loginReducer, signUpReducer, toDoReducer, categoryReducer } from "./reducers";

const rootReducer = combineReducers({
    loginReducer, signUpReducer, toDoReducer, categoryReducer
});

export default rootReducer;