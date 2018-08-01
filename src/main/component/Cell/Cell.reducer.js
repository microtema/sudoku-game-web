import * as Event from './Cell.constants';

export default function CellReducer(state = {selected: -1}, action) {

    switch (action.type) {
        case Event.QUERY :
            return {...action.payload};
        case Event.UPDATE :
            return {...action.payload};
        default:
            return state;
    }
}