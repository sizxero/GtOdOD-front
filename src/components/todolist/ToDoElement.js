import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteOutline from '@mui/icons-material/DeleteOutline'

const ToDoElement = (props) => {
    const [readOnly, setReadOnly] = useState(true);
    const [titleData, setTitleData] = useState(props.item.title);
    const colorMapping = {
        '$GtOdOD_red': '#EF404A', 
        '$GtOdOD_pink': '#F2728C',
        '$GtOdOD_orange': '#F79552', 
        '$GtOdOD_yellow': '#FFD400',
        '$GtOdOD_lime': '#D5E05B', 
        '$GtOdOD_green': '#80B463',
        '$GtOdOD_skyblue': '#81D3EB', 
        '$GtOdOD_blue': '#27AAE1',
        '$GtOdOD_purple': '#9E7EB9', 
        '$GtOdOD_lightpurple': '#BBB8DC',
        '$GtOdOD_gray': '#A7A9AC', 
        '$GtOdOD_black': '#000000'
    };
    let state = useSelector((state) => state.categoryReducer.categories);

    return (
        <><ListItem>
        {state !== null 
        ? <Checkbox 
        checked={props.item.done} 
        icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />}
        style ={{
            color: colorMapping[state[state.findIndex((x)=>x.no === Number(props.item.ctgId))].color],
            marginRight: "10px" 
        }}/>
        : <></>
        }
        <ListItemText>
            {state !== null 
            ? <h4>{state[state.findIndex((x)=>x.no === Number(props.item.ctgId))].title}</h4>
            : <></>
            }
            <InputBase
                type="text" 
                inputProps={{"aria-label":"naked", readOnly: readOnly}}
                id={props.item.id}
                name={props.item.id}
                multiline={true}
                fullWidth={true}
                onChange={(e)=>{setTitleData(e.target.value)}}
                onClick={(e)=>{ setReadOnly(false)}}
                value={props.item.title}></InputBase>
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