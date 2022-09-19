import { CustomBtn } from '../components/common';
import { InputArea } from '../components/login';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="Login">
            <div className="Title">
                <h1><LoginIcon/> LOGIN</h1>
            </div>
            <InputArea />
            <Link to="/signup">회원이 아니십니까?</Link>
            <CustomBtn 
            id="login-btn"
            title="LOGIN" />
        </div>
    );
}

export default Login;