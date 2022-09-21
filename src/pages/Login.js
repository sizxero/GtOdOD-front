import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../redux/actions/LoginAction";

import { CustomBtn } from '../components/common';
import { InputArea } from '../components/login';
import LoginIcon from '@mui/icons-material/Login';

import UserAPI from '../client/api/UserAPI';

const Login = () => { 
    let dispatch = useDispatch();
    let state = useSelector((state) => state.loginReducer);

    const writeId = (e) => dispatch(Action.writeIdLogin(e.target.value));
    const writePw = (e) => dispatch(Action.writePwLogin(e.target.value));

    const clickLogin = async () => {
        await UserAPI.login(state);
        window.location.href="/";
    }   
    
    useEffect(() => {
    }, [state]);

    return (
        <div className="Login">
            <div className="Title">
                <h1><LoginIcon/> LOGIN</h1>
            </div>
            <InputArea 
            writeId={writeId}
            writePw={writePw}/>
            <Link to="/signup">회원이 아니십니까?</Link>
            <CustomBtn 
            id="login-btn"
            title="LOGIN"
            color="primary"
            clickEvt={(e) => clickLogin()} />
        </div>
    );
}

export default Login;