import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useState } from "react";
import DeleteOutline from '@mui/icons-material/DeleteOutline'

const ToDoElement = ({item, onEditItem, onDeleteItem, onCheckedItem}) => {
    const [readOnly, setReadOnly] = useState(true);
    const [titleData, setTitleData] = useState(item.title);

    return (
        <><ListItem>
        <Checkbox 
        checked={item.done} 
        icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />}
        style ={{
            color: "#4EB8B9",
            marginRight: "10px" 
        }}/>
        <ListItemText>
            <h4>Category</h4>
            <InputBase
                type="text" 
                inputProps={{"aria-label":"naked", readOnly: readOnly}}
                id={item.id}
                name={item.id}
                multiline={true}
                fullWidth={true}
                onChange={(e)=>{setTitleData(e.target.value)}}
                onClick={(e)=>{ setReadOnly(false)}}
                value={titleData}></InputBase>
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo">
                <DeleteOutline />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem></>
    )
}

export default ToDoElement;