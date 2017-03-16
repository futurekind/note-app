import { types } from '../actions/notes';

export const initialState = {
    results: [],
    entities: {},
    open: false,
    active: '',
    inEditMode: ''
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

        case types.NOTES__EDIT:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [action.id]: {
                        ...state.entities[action.id],
                        ...action.payload
                    }
                }
            }

        case types.NOTES__DELETE:
            const indexToDelete = state.results.indexOf(action.id)
            return {
                ...state,
                results: [
                    ...state.results.slice(0, indexToDelete),
                    ...state.results.slice(indexToDelete + 1)
                ],
                entities: Object.keys(state.entities).reduce((nextEntities, key) => {
                    if(key === action.id) return nextEntities

                    return {
                        ...nextEntities,
                        ...state.entities[key]
                    }
                }, {})
            }

        case types.NOTES__ACTIVE:
            return {
                ...state,
                active: action.id
            }

        case types.NOTES__OPEN:
            return {
                ...state,
                open: !state.open
            }

        case types.NOTES__EDIT_MODE:
            return {
                ...state,
                inEditMode: action.id
            }

        default:
            return state

    }
}