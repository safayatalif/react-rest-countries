import React, { useState } from 'react';
import "./count.css"

const Count = () => {
    let [count , setCount] = useState(0);
    const PowerAdd =()=>{
        count = count + 1 ;
        setCount(count);
    }
    const PowerIcs =()=>{
        count = count - 1 ;
        setCount(count);
    }
    return (
        <div className='count-container'>
            <h4>Power  : {count}</h4>
            <button className='btn btn-primary' onClick={PowerAdd}>++++</button>
            <button className='btn btn-secondary' onClick={PowerIcs}>-----</button>
        </div>
    );
};

export default Count;