import { TextField } from "@material-ui/core";

const InputArea = () => {
    return (
        <div className="InputArea">
        <TextField id="outlined-basic" label="아이디" variant="outlined" />
        <TextField id="outlined-basic" label="비밀번호" variant="outlined" />
        </div>
    );
}

export default InputArea;