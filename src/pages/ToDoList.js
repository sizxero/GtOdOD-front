import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../redux/actions/ToDoAction";

import { Container } from '@mui/material';
import { useState } from 'react';
import { InputArea, TableArea } from '../components/todolist';
import Modal from "../components/common/Modal";
import { AddCategory } from '.';

const ToDoList = () => {
    const [addCategory, setAddCategory] = useState(false);
    let dispatch = useDispatch();
    let state = useSelector((state) => state.toDoReducer);

    const writeToDo = (e) => dispatch(Action.writeToDo(e.target.value));
    const rewriteToDo = (e) => dispatch(Action.rewriteToDo(e.target.value));
    const selectCtg = (e) => {
        if (e.target.value === 'add')
            setAddCategory(!addCategory);
        else
            dispatch(Action.selectCtg(e.target.value))
    };

    const addToDo = () => console.log(state.todo);

    useEffect(() => {

    }, [state]);

    return (
        <div className="ToDoList">
            <Container maxWidth="md">
                <InputArea
                openModal={() => setAddCategory(!addCategory)}
                writeToDo={writeToDo}
                selectCtg={selectCtg}
                addToDo={addToDo}/>
                <TableArea items={state.todolist} />
                {addCategory && (
                    <Modal closeModal={() => setAddCategory(!addCategory)}>
                        <AddCategory />
                    </Modal>
                )}
            </Container>
        </div>
    );
}

export default ToDoList;