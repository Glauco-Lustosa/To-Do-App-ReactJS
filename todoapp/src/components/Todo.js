import React from 'react';  

const Todo = (e) => {
    return(
        <div className='todo'> 
            <li className='todo-item'>Heey</li>
            <button className='complete-btn'>
                <i className='fas fa-check'></i>
                </button>
            <button className='trash-btn'>
                <i className='fas fa-trash'></i>
                </button>
        </div>
    )
 }

export default Todo;