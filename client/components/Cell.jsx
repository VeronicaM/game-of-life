import React from 'react';
const Cell = (props) =>{
    const cellClass = props.active ? "cell active": "cell";
    const handleClick = function(){
        const toggleValue = document.getElementById(props.index).className === "cell active" ? 0 : 1 ;
        const toggleActive = document.getElementById(props.index).className === "cell active" ? false : true ;
        const newCell = new Object({active:toggleActive, index:props.index, value:toggleValue});
        props.onClickCell(newCell);
    }
     return (
        <div key={props.index} id={props.index} className={cellClass} onClick={handleClick}>
            
        </div>
    );
};

export default Cell;
