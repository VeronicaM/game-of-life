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
                    cells :GameService.generateRandomCells(),
                    generations : GameService.getGenerations()
        };
    }
    componentDidMount(){
       
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
  runGame(){
      const newBoard = GameService.updateGame(this.state.cells);
      this.setState({cells:newBoard, generations:GameService.getGenerations()});
  }
  handleClickCell(cellIndex){
        let newCells = this.state.cells;
        let toggle = !newCells[cellIndex].active;
        let value = newCells[cellIndex].active ? 0 : 1;
        newCells[cellIndex]= new Object({active:toggle, index:cellIndex, value:value});
        this.setState({cells:newCells});
  }
  clearBoard(){
      let newCells = GameService.generateCells();
      this.setState({cells:newCells, generations:GameService.getGenerations() });
  }
    render(){
        const generatedCells = this.generateCells();
        return (
            <div>
                <Controls generations={this.state.generations} runGame={this.runGame.bind(this)} clearBoard={this.clearBoard.bind(this)}/>
                <div className ="boardBack">
                    <Board cells ={generatedCells} width={(this.n*this.cellSize)} />
                </div>
             </div>
        )
    };
}
export default App;