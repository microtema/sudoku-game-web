import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';
import * as CellActions from './Cell.actions';
import './Cell.css';
import * as CellItemConstants from '../CellItem/CellItem.constants';

class CellComponent extends Component {

    render() {

        let classNames = classnames('Cell card text-center', {
            'text-success': this.props.data.value !== 0
        });

        return (
            <div className={classNames} onClick={() => this.select()}>
                <h1>{this.props.data.value !== 0 ? this.props.data.value : ''}</h1>
            </div>
        );
    }

    select() {

        if (this.props.selected === 0) {
            return;
        }

        let data = {...this.props.data};
        data.value = this.props.selected;

        console.info('cell', data);

        this.props.onChange(data);
    }
}

function mapStateToProps(state) {

    return {
        selected: state[CellItemConstants.REDUCER_NAME].selected
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(CellActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CellComponent);