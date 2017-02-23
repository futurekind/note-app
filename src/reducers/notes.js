import { types } from '../actions/notes';

export const initialState = {
    results: [],
    entities: {},
    open: false,
    active: ''
}

export default (state = initialState, action) => {
    switch(action.type) {

        case types.NOTES__CREATE:
            return {
                ...state,
                results: [
                    ...state.results,
                    action.payload.id
                ],
                entities: {
                    ...state.entities,
                    [action.payload.id]: action.payload
                }
            }

        default:
            return state

    }
}