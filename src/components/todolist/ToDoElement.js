import { Favorite, FavoriteBorder, DeleteOutline, ArrowRightAlt } from "@mui/icons-material";
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../../redux/actions/ToDoAction"; 
import ToDoAPI from "../../client/api/ToDoAPI";

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const ToDoElement = (props) => {
    dayjs.extend(customParseFormat);

    const [readOnly, setReadOnly] = useState(true);
    const [titleData, setTitleData] = useState(props.item.title);
    const dispatch = useDispatch();

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
    let todostate = useSelector((state) => state.toDoReducer)

    const checkedItem = async (item) => {
        item.done = !item.done;
        await ToDoAPI.editToDo(item);
        dispatch(Action.dispatchToDoList(await ToDoAPI.findAllToDo(todostate.targetDate).then(x=>x.data)));
    }

    const editItemHandler = (e) => {
        if(e.key === 'Enter') {
            setReadOnly(true);
            editItem(props.item);
        }
    }

    const editItem = async (item) => {
        item.title = titleData;
        await ToDoAPI.editToDo(item);
        dispatch(Action.dispatchToDoList(await ToDoAPI.findAllToDo(todostate.targetDate).then(x=>x.data)));
    }

    const deleteItem = async (item) => {
        await ToDoAPI.deleteToDo(item);
        dispatch(Action.dispatchToDoList(await ToDoAPI.findAllToDo(todostate.targetDate).then(x=>x.data)));
    }

    useEffect(() => {

    }, [titleData]);

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
        }}
        onClick={() => checkedItem(props.item)}/>
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
                onKeyPress={(e) => editItemHandler(e)}
                value={titleData}></InputBase>
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton
                aria-label="Delete Todo"
                onClick={() => {
                    props.item.date=dayjs(props.item.date, 'YYYY-MM-DDTHH:mm:ss').add(1, 'd').format('YYYY-MM-DDTHH:mm:ss');
                    editItem(props.item);
                }}>
                    <ArrowRightAlt />
            </IconButton>
            <IconButton
            aria-label="Delete Todo"
            onClick={() => deleteItem(props.item)}>
                <DeleteOutline />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem></>
    )
}

export default ToDoElement;