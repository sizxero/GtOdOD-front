import { Container } from '@mui/material';
import { useState } from 'react';
import { InputArea, TableArea } from '../components/todolist';
import Modal from "../components/common/Modal";
import { AddCategory } from '.';

const ToDoList = () => {
    let [topNo, setTopNo] = useState(3);
    const [addCategory, setAddCategory] = useState(false);
    const [items, setItems] = useState([
        {id: 0, title: 'hello world 1', done: true},
        {id: 1, title: 'hello world 2', done: false},
        {id: 2, title: 'hello world 3', done: true},
    ]);

    return (
        <div className="ToDoList">
            <Container maxWidth="md">
                <InputArea topNo={topNo}
                openModal={() => setAddCategory(!addCategory)}/>
                <TableArea items={items} />
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