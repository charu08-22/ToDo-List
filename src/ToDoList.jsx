import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';

const ToDoList = (props) =>
{
    const [line , setLine] = useState(false);

    const cutIt = () =>
    {
        setLine(true);
    }
    return (
        <><div className="todo_style">
        <span>
        <DeleteIcon className="fa-times" onClick={() => {
            props.onSelect(props.id);
        }}></DeleteIcon>
        
        </span>
        <CancelIcon className="fa-times" onClick={cutIt}></CancelIcon>
    <li style ={ {textDecoration : line ? "line-through" : "none" }}>{props.text}</li>
    </div>
    </>)
}

export default ToDoList;