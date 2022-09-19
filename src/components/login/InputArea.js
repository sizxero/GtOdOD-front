import { TextField } from "@material-ui/core";

const InputArea = () => {
    return (
        <div className="InputArea">
        <TextField id="outlined-basic" label="ID" variant="outlined" />
        <TextField id="outlined-basic" label="PW" variant="outlined" />
        </div>
    );
}

export default InputArea;