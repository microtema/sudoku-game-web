import RestEndpoint from '../../endpoint/Endpoint';
import * as CellItemConstants from './CellItem.constants';

export function applyValue(value) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.applyValue(value);
    };
}

export function fireEvent(payload) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return dispatch({type: CellItemConstants.UPDATE, payload: payload});
    };
}