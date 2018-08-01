import * as Event from './Game.constants';
import RestEndpoint from '../../endpoint/Endpoint';

export function createGame(id) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.createGame(id).then(entries => {
            dispatch({type: Event.QUERY, payload: entries});
        }).catch(error => {
            throw error;
        });
    };
}

export function solveGame(id) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.solveGame(id).then(entries => {
            dispatch({type: Event.UPDATE, payload: entries});
        }).catch(error => {
            throw error;
        });
    };
}

export function applyValue(id, cell) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.applyValue(id, cell).then(entries => {
            dispatch({type: Event.UPDATE, payload: entries});
        }).catch(error => {
            throw error;
        });
    };
}