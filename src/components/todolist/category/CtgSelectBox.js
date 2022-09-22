import { useSelector } from "react-redux";

import { Select, MenuItem } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
const CtgSelectBox = (props) => {
    let state = useSelector((state) => state.categoryReducer);
    
    return(
        <Select
        defaultValue=""
        className="SelectWrapper"
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        onChange={props.selectEvt}>
            { state.categories !== null ? state.categories.map((ctg) => <MenuItem value={ctg.no.toString()}>{ctg.title}</MenuItem>) : <></>}
            <MenuItem value='add'>
                <em><AddCircleOutlinedIcon id="add-cate-btn" style={{color: "#4EB8B9"}} />Add</em>
            </MenuItem>
        </Select>
    );
}

export default CtgSelectBox;