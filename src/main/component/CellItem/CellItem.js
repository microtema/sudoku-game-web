import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';
import * as CellItemActions from './CellItem.actions';
import * as CellItemConstants from './CellItem.constants';
import './CellItem.css';

class CellItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
    }


    static getDerivedStateFromProps(props, state) {

        if (props.value === state.value) {

            return null;
        }

        return {value: props.selected};
    }

    render() {

        let classNames = classnames('CellItem card text-center text-primary', {'border border-primary': this.state.value === this.props.selected});

        return (
            <div className={classNames} onClick={() => this.select()}>
                <h1>{this.props.value}</h1>
            </div>
        );
    }

    select() {

        this.setState({value: this.props.value}, () => {
            this.props.actions.fireEvent({selected: this.props.value});
        })
    }
}

function mapStateToProps(state) {

    return {
        selected: state[CellItemConstants.REDUCER_NAME].selected
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(CellItemActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CellItemComponent);