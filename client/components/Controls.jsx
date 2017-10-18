import React from 'react';
const Controls = (props) =>{
    return(
        <div className="controls">
             <button> Run</button>
             <button> Pause</button>
             <button> Clear</button>
             <div> Generations: <span> {props.generations} </span></div>
        </div>
    );
};

export default Controls;