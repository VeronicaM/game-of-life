import React from 'react';
const Cell = (props) =>{
    const cellClass = props.active ? "cell active": "cell";
    const handleClick = function(){
        props.onClickCell(props.index);
    }
     return (
        <div key={props.index} className={cellClass} onClick={handleClick}>
            
        </div>
    );
};

export default Cell;
