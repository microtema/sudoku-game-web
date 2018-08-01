import * as Event from './CellItem.constants';

export default function CellItemReducer(state = {selected: 0}, action) {

    switch (action.type) {
        case Event.QUERY :
            return {...action.payload};
        case Event.UPDATE :
            return {...action.payload};
        default:
            return state;
    }
}