import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../../redux/actions/CategoryAction";

import { CustomBtn } from '../../components/common';
import { CtgPalette } from '../../components/todolist';
import { TextField } from "@material-ui/core";

import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';

import CategoryAPI from '../../client/api/CategoryAPI';

const AddCategory = (props) => {
    let dispatch = useDispatch();
    let state = useSelector((state) => state.categoryReducer);

    const selectColor = (e) => {      
        dispatch(Action.selectColor(e.target.id));
        e.target.parentNode.childNodes.forEach((node) => 
            node.classList.remove('select')
        );
        e.target.classList.add('select');
    };

    const clickAdd = async () => {
        await CategoryAPI.addCategory(state.newCategory);
        props.modalToggle();
        dispatch(Action.dispatchCategories(await CategoryAPI.findAllCategories().then(x=>x.data)))
    }   

    useEffect(() => {}, [state.categories]);
    return (
        <div className="AddCategory">
            <div className="Title">
                <h1><CreateNewFolderOutlinedIcon/> Add Category</h1>
            </div>
            <TextField 
            id="outlined-basic" 
            label="카테고리명" 
            variant="outlined" 
            onChange={(e) => dispatch(Action.writeCategory(e.currentTarget.value))}/>
            <div className="Color">
                <h2>🎨 색상 고르기</h2>
                <CtgPalette 
                selectColor={selectColor}/>
            </div>
            <div className="BtnWrapper">
            <CustomBtn 
            id="ctg-add-btn"
            title="추가"
            color="primary"
            clickEvt={() => clickAdd()} />
            <CustomBtn 
            id="ctg-add-btn"
            title="취소"
            color="secondary" 
            clickEvt={props.modalToggle}/>
            </div>
        </div>
    );
}

export default AddCategory;