import { useSelector } from "react-redux";

import { Select, MenuItem } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
const CtgSelectBox = (props) => {
    let state = useSelector((state) => state.categoryReducer);
    let state2 = useSelector((state) => state.toDoReducer.todo);
    return(
        <Select
        value={state2.ctgId}
        className="SelectWrapper"
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        onChange={props.selectEvt}>
            <MenuItem value='' disabled>카테고리 선택</MenuItem>
            { state.categories !== null ? state.categories.map((ctg) => <MenuItem value={ctg.no.toString()}>{ctg.title}</MenuItem>) : <></>}
            <MenuItem value='add'>
                <em><AddCircleOutlinedIcon id="add-cate-btn" style={{color: "#4EB8B9"}} />Add</em>
            </MenuItem>
        </Select>
    );
}

export default CtgSelectBox;