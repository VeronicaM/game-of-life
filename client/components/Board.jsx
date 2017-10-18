import React from 'react';
const Board = (props) =>{
    const boardStyle ={
        'display': 'flex',
        "flex-wrap": 'wrap',
        'width': props.width+'px'
    };
    return (
        <div className="board" style={boardStyle}>
          {props.cells}
        </div>
    );
};

export default Board;

