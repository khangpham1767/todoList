import React from 'react';
import './todoList.css'

function todoList(props) {
    let name = '';
    if(props.isComplete){
        name += 'item-complete';
    }
    return (
        <tr className='todoList'>
            <td className = {name}>{props.todo}</td>
            <td onClick = {props.click}>{!props.isComplete && 'Check'}
                          {props.isComplete && 'Uncheck'}</td>
        </tr>
    );
} 
export default todoList;