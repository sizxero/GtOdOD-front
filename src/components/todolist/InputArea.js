import { Grid, Paper, TextField } from '@mui/material';
import { CustomBtn } from '../common';
import { CtgSelectBox } from '.';

const InputArea = (props) => {
    return (
        <div className="InputArea">
             <Paper style={{margin: "16px 0"}}>
                <Grid container className="InputWrapper">
                    <Grid item xs={3} md={3} className="CategoryWrapper">
                        <CtgSelectBox
                        ctgs={props.ctgs}
                        selectEvt={props.selectCtg} />
                    </Grid>
                    <Grid item xs={7} md={8} className="ToDoTxtWrapper">
                        <TextField fullWidth 
                        placeholder='할 일을 입력하세요 ...'
                        onChange={props.writeToDo} />
                    </Grid>
                    <Grid item xs={2} md={1} className="BtnWrapper">
                        <CustomBtn
                        id="add-btn"
                        title="추가"
                        color="primary"
                        clickEvt={props.addToDo}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default InputArea;