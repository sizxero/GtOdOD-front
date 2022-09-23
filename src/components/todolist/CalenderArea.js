import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from '../../redux/actions/ToDoAction';

import dayjs from 'dayjs';
import {TextField, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ToDoAPI from '../../client/api/ToDoAPI';

const CalenderArea = () => {
    const [value, setValue] = useState(dayjs());
    const dispatch = useDispatch();
    let state = useSelector((state) => state.toDoReducer.todo);


    const handleChange = async(newValue) => {
        setValue(newValue);
        dispatch(Action.selectDate(newValue.format('YYYY-MM-DDTHH:mm:ss')));
        dispatch(Action.dispatchTargetDate(newValue.format('YYYY-MM-DD')));
        dispatch(Action.dispatchToDoList(await ToDoAPI.findAllToDo(newValue.format('YYYY-MM-DD')).then(x=>x.data)));
    };
    
    useEffect(() => {
        if(state.date === null)
            dispatch(Action.selectDate(value.format('YYYY-MM-DDTHH:mm:ss')));
    });

    return (
        <div className="CalanderArea">
            <IconButton
            aria-label="Delete Todo"
            onClick={() => handleChange(value.subtract(1, "d"))}>
                <ChevronLeft />
            </IconButton>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            inputFormat="YYYY년 MM월 DD일"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <IconButton
            aria-label="Delete Todo"
            onClick={() => handleChange(value.add(1, "d")) }>
            <ChevronRight />
        </IconButton>        
        </div>
    );
}

export default CalenderArea;