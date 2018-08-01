import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CellComponent} from '../Cell/index';
import {CellItemComponent} from '../CellItem/index';
import * as GameConstants from './Game.constants';
import * as GameActions from './Game.actions';
import './Game.css';
import storage from './Game.storage';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = storage.getState({gameId: 0});
    }

    componentDidMount() {

        this.props.actions.createGame(this.state.gameId);
    }

    render() {

        if(this.props.message){
            alert(this.props.message);
        }

        return (
            <div className="container">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <button onClick={() => this.createGame()} type="button" className="btn btn-secondary">New
                        Game
                    </button>
                    <button onClick={() => this.props.actions.solveGame(this.state.gameId)} type="button"
                            className="btn btn btn-secondary">Solve
                        Game
                    </button>
                </div>
                <table>
                    <tbody>
                    {
                        this.props.rows.map((row, rowIndex) => {
                            return (<tr key={rowIndex}>
                                {
                                    row.cells.map((cell, cellIndex) => <td key={cellIndex}><CellComponent
                                        onChange={(cell) => this.applyValue(cell)} data={cell}/>
                                    </td>)
                                }
                            </tr>)
                        })
                    }
                    <tr>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((it, index) => <td
                                key={'place-holder-' + index}>&nbsp;</td>)
                        }
                    </tr>
                    <tr>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((it, index) => <td key={'template-' + index}>
                                <CellItemComponent value={it}/></td>)
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    createGame() {

        this.setState({gameId: this.state.gameId + 1}, () => {
            this.props.actions.createGame(this.state.gameId).then(() => storage.setState(this.state));
        });
    }

    applyValue(cell) {

        this.props.actions.applyValue(this.state.gameId, cell).catch(e => {
            alert(e);
        });
    }
}

function mapStateToProps(state) {

    return {
        rows: state[GameConstants.REDUCER_NAME].rows,
        message: state[GameConstants.REDUCER_NAME].message
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(GameActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);