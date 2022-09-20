import { TextField } from "@material-ui/core";

const InputArea = (props) => {
    return (
        <div className="InputArea">
        <TextField id="outlined-basic" 
        label="아이디" 
        variant="outlined"
        onChange={props.writeId} />
        <TextField id="outlined-basic" 
        type="password"
        label="비밀번호" 
        variant="outlined"
        onChange={props.writePw} />
        </div>
    );
}

export default InputArea;