import { Container } from '@mui/material';
import { useState } from 'react';
import { InputArea, TableArea } from '../components/todolist';

const ToDoList = () => {
    let [topNo, setTopNo] = useState(3);
    const [items, setItems] = useState([
        {id: 0, title: 'hello world 1', done: true},
        {id: 1, title: 'hello world 2', done: false},
        {id: 2, title: 'hello world 3', done: true},
    ]);

    return (
        <div className="ToDoList">
            <Container maxWidth="md">
                <InputArea topNo={topNo}/>
                <TableArea items={items} />
            </Container>
        </div>
    );
}

export default ToDoList;