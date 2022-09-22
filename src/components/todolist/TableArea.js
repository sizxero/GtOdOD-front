import { Paper,  List } from '@mui/material';
import ToDoElement from "./ToDoElement";

const TableArea = (props) => {
    return (
            <div className="TableArea">
            <Paper>
                <List>
                {
                props.items !== null ?
                props.items.map((item)=>(<ToDoElement item={item} key={item.no}/>))
                : <></>
                }
                </List>
            </Paper>
            </div>
    );
}

export default TableArea;