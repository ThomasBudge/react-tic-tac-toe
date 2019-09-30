import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null)
        }
    }
    
    //we're passing a value property into the square component
    renderSquare(i) {
        return <Square 
        value={this.state.squares[i]}
        //we are passing down the handleClick
        onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i){
        alert(i)
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

export default Board;