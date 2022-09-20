import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../redux/actions/SignUpAction";

import InputArea from '../components/signup/InputArea';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CustomBtn } from '../components/common';

const SignUp = () => {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.signUpReducer);

    const writeId = (e) => dispatch(Action.writeIdSignUp(e.target.value));
    const writePw = (e) => dispatch(Action.writePwSignUp(e.target.value));
    const writePwRe = (e) => dispatch(Action.writePwReSignUp(e.target.value));
    const writeName = (e) => dispatch(Action.writeNameSignUp(e.target.value));
    const writeNick = (e) => dispatch(Action.writeNickSignUp(e.target.value));

    const clickSignUp = () => {
        console.log(state);
    }   

    useEffect(() => {

    }, [state]);

    return (
        <div className="SignUp">
            <div className="Title">
                <h1><PersonAddIcon/> SIGN UP</h1>
            </div>
            <InputArea 
            writeId={writeId}
            writePw={writePw}
            writePwRe={writePwRe}
            writeName={writeName}
            writeNick={writeNick}
            isSamePw={state.pwchk}/>
            <CustomBtn 
            id="signup-btn"
            title="SIGN UP"
            color="primary"
            clickEvt={()=>clickSignUp()} />
        </div>
    );
}

export default SignUp;