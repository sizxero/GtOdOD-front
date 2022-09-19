import { Grid, Paper, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { CustomBtn } from '../common';

class ItemObject {
    constructor(title) {
        this.id = '';
        this.title = title;
        this.done = false;
    }
}

const InputArea = () => {
    const [item, setItem] = useState(new ItemObject(''));

    const onEnterKeyPress = (e) => {
        if(e.key === 'Enter') {
            setItem(new ItemObject(''));
        }
    };

    return (
    <Paper className="InputArea" style={{margin: "16px 0"}}>
        <Grid container>
            <Grid xs={11} md={11}>
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
            <Grid xs={1}>
                <CustomBtn
                id="add-btn"
                title="추가"/>
                </Grid>
        </Grid>
    </Paper>
    );
}

export default InputArea;