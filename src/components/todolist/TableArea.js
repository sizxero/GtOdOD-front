import { Paper,  List } from '@mui/material';
import ToDoElement from "./ToDoElement";

const TableArea = ({items, editItem, deleteItem, checkedItem}) => {
    return (
            <div className="TableArea">
            <Paper>
                <List>
                {
                items.map((item)=>(<ToDoElement item={item} key={item.id} onEditItem={editItem} onDeleteItem={deleteItem} onCheckedItem={checkedItem}/>))
                }
                </List>
            </Paper>
            </div>
    );
}

export default TableArea;