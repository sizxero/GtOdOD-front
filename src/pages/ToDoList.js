import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../redux/actions/ToDoAction";
import * as Action2 from "../redux/actions/CategoryAction";

import { Container, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { InputArea, TableArea } from '../components/todolist';
import Modal from "../components/common/Modal";
import { AddCategory } from '.';
import ToDoAPI from '../client/api/ToDoAPI';
import CategoryAPI from '../client/api/CategoryAPI';

const ToDoList = () => {
    const [addCategory, setAddCategory] = useState(false);
    const modalToggle = () => setAddCategory(!addCategory);
    
    const [opt, setOpt] = useState(false);

    let dispatch = useDispatch();
    let state = useSelector((state) => state.toDoReducer);

    const dispatchData = async () => {
        dispatch(Action.dispatchToDoList(await ToDoAPI.findAllToDo().then(x=>x.data)));
        dispatch(Action2.dispatchCategories(await CategoryAPI.findAllCategories().then(x=>x.data)));
    }
    const writeToDo = (e) => dispatch(Action.writeToDo(e.target.value));
    
    const selectCtg = (e) => {
        if (e.target.value === 'add') {
            setAddCategory(!addCategory);
            dispatch(Action.selectCtg(''));
        }
        else {
            dispatch(Action.selectCtg(e.target.value));
        }
    };

    const addToDo = async() => {
        await ToDoAPI.addToDo(state.todo);
        dispatch(Action.dispatchToDoList(await ToDoAPI.findAllToDo().then(x=>x.data)));
        dispatch(Action.writeToDo(''))
    };

    useEffect(() => {
        dispatchData();
    }, []);

    return (
        <div className="ToDoList">
            <Container maxWidth="md">
                <InputArea
                writeToDo={writeToDo}
                selectCtg={selectCtg}
                addToDo={addToDo}/>
                {opt ?
                state.todolist !== null ?                          
                <TableArea items={state.todolist.filter(x => !(x.done))} />
                : <></>  
                :
                state.todolist !== null ?                          
                <TableArea items={state.todolist} />
                : <></>
                }
                {addCategory && (
                    <Modal closeModal={() => modalToggle()}>
                        <AddCategory
                        modalToggle={modalToggle} />
                    </Modal>
                )}
                <FormControlLabel 
                control={<Checkbox checked={opt} onClick={() => setOpt(!opt)}/>} 
                label='완료항목 보지 않기' />
            </Container>
        </div>
    );
}

export default ToDoList;