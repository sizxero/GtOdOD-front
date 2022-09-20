import { Select, MenuItem } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
const CtgSelectBox = (props) => {
    return(
        <Select
        className="SelectWrapper"
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        onChange={props.selectEvt}>
            <MenuItem value='add'>
                <em><AddCircleOutlinedIcon id="add-cate-btn" style={{color: "#4EB8B9"}} />Add</em>
            </MenuItem>
        </Select>
    );
}

export default CtgSelectBox;