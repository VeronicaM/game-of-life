import React from 'react';
const Controls = (props) =>{
    return(
        <div className="controls">
             <button onClick={props.runGame}> Run</button>
             <button> Pause</button>
             <button onClick={props.clearBoard}> Clear</button>
             <div> Generations: <span> {props.generations} </span></div>
        </div>
    );
};

export default Controls;