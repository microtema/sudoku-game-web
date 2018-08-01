import * as Event from './Game.constants';

export default function GameReducer(state = {rows: []}, action) {

    switch (action.type) {
        case Event.QUERY :
            return {...action.payload};
        case Event.UPDATE :
            return {...action.payload};
        default:
            return state;
    }
}