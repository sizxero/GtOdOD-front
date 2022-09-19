import { Grid, Paper, TextField, Select, MenuItem, FormControl, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { CustomBtn } from '../common';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Login } from "../../pages";


class ItemObject {
    constructor(title) {
        this.id = '';
        this.title = title;
        this.done = false;
    }
}

const InputArea = (props) => {
    const [item, setItem] = useState(new ItemObject(''));
    
    const onEnterKeyPress = (e) => {
        if(e.key === 'Enter') {
            setItem(new ItemObject(''));
        }
    };

    return (
        <div className="InputArea">
             <Paper style={{margin: "16px 0"}}>
                <Grid container className="InputWrapper">
                    <Grid item xs={3} md={3} className="CategoryWrapper">
                <Select
                className="SelectWrapper"
                //   value={age}
                //   onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value="add" id="add-option" onClick={props.openModal}><em><AddCircleOutlinedIcon id="add-cate-btn" style={{color: "#4EB8B9"}} />Add</em></MenuItem>
                </Select>
                
                    </Grid>
                    <Grid item xs={7} md={8} className="ToDoTxtWrapper">
                        <TextField fullWidth 
                        placeholder='할 일을 입력하세요 ...'
                        value={item.title}
                        onChange={(e) => {
                            let newItem = {...item};
                            newItem.title = e.target.value;
                            setItem(newItem);
                        }}
                        onKeyPress={onEnterKeyPress}/>
                    </Grid>
                    <Grid item xs={2} md={1} className="BtnWrapper">
                        <CustomBtn
                        id="add-btn"
                        title="추가"
                        color="primary"/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default InputArea;