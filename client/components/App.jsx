import React from 'react';
import '../app.scss';
import Board from './Board.jsx';
import Cell from './Cell.jsx';
import GameService from './game.service.js';
import Controls from './Controls.jsx';
 class App extends React.Component{
    constructor(props){
        super(props);
        this.n = 70;
        this.m = 50;
        this.cellSize = 12;
        this.state = {
                    cells :GameService.generateCells()
                };
    }
   generateCells(){
        var arr = [];
        var currentCell = {};
        for (var i = 0; i < this.state.cells.length; i++) {
            currentCell = this.state.cells[i];
            arr.push(
                <Cell active={currentCell.active} index={currentCell.index} key ={currentCell.index} onClickCell={this.handleClickCell.bind(this)} />
            );
        }  
        return arr;
  }
  handleClickCell(cellIndex){
        let newCells = this.state.cells;
        let toggle = !newCells[cellIndex].active;
        newCells[cellIndex]= new Object({active:toggle, index:cellIndex});
        this.setState({cells:newCells});
  }
    render(){
        const generatedCells = this.generateCells();
        return (
            <div>
                <Controls />
                <div className ="boardBack">
                    <Board cells ={generatedCells} width={(this.n*this.cellSize)} />
                </div>
             </div>
        )
    };
}
export default App;