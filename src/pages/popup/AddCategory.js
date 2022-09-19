import { CustomBtn } from '../../components/common';
import { CtgPalette } from '../../components/todolist';
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';

const AddCategory = () => {
    return (
        <div className="AddCategory">
            <div className="Title">
                <h1><CreateNewFolderOutlinedIcon/> Add Category</h1>
            </div>
            <TextField id="outlined-basic" label="카테고리명" variant="outlined" />
            <div className="Color">
                <h2>🎨 색상 고르기</h2>
                <CtgPalette />
            </div>
            <div className="BtnWrapper">
            <CustomBtn 
            id="ctg-add-btn"
            title="추가"
            color="primary" />
            <CustomBtn 
            id="ctg-add-btn"
            title="취소"
            color="secondary" />
            </div>
        </div>
    );
}

export default AddCategory;