import InputArea from '../components/signup/InputArea';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CustomBtn } from '../components/common';

const SignUp = () => {
    return (
        <div className="SignUp">
            <div className="Title">
                <h1><PersonAddIcon/> SIGN UP</h1>
            </div>
            <InputArea />
            <CustomBtn 
            id="signup-btn"
            title="SIGN UP"
            color="primary" />
        </div>
    );
}

export default SignUp;