import RestEndpoint from '../../endpoint/Endpoint';
import * as Event from "../Game/Game.constants";

export function applyValue(id, cell) {

    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {

        return RestEndpoint.applyValue(id, cell).then(entries => {
            dispatch({type: Event.QUERY, payload: entries.rows});
        }).catch(error => {
            throw error;
        });
    };
}