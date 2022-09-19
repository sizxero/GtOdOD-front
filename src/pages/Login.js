import { InputArea, LoginBtn } from '../components/login';
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
            <LoginBtn />
        </div>
    );
}

export default Login;