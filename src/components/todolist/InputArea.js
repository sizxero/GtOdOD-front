import { Grid, Paper, TextField } from '@mui/material';
import { CustomBtn } from '../common';
import { CtgSelectBox } from '.';


import { useSelector } from "react-redux";

const InputArea = (props) => {
    const keyPressInput = (e) => {
        if(e.key === 'Enter')
            props.addToDo();
    }

    let state = useSelector((state) => state.toDoReducer.todo);

    console.log(state);
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
                        onChange={props.writeToDo} 
                        onKeyPress={keyPressInput}
                        value={state.title}/>
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