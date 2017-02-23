import { types } from '../actions/categories';

export const initialState = {
    results: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'],
    entities: {
        cat1: {
            id: 'cat1',
            label: 'Kategorie 1',
            color: 'orange'
        },
        cat2: {
            id: 'cat2',
            label: 'Kategorie 2',
            color: 'red'
        },
        cat3: {
            id: 'cat3',
            label: 'Kategorie 3',
            color: 'green'
        },
        cat4: {
            id: 'cat4',
            label: 'Kategorie 4',
            color: 'blue'
        },
        cat5: {
            id: 'cat5',
            label: 'Kategorie 5',
            color: 'purple'
        }
    },
    active: [],
    open: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        
        case types.CAT__EDIT:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [action.id]: {
                        ...state.entities[action.id],
                        label: action.payload.label
                    }
                }
            }

        case types.CAT__TOGGLE_ACTIVE:
            const activeIndex = state.active.indexOf(action.id);

            if(activeIndex > -1) {
                return {
                    ...state,
                    active: [
                        ...state.active.slice(0, activeIndex),
                        ...state.active.slice(activeIndex + 1)
                    ]
                }
            }

            return {
                ...state,
                active: [
                    ...state.active,
                    action.id
                ]
            }

        case types.CAT__TOGGLE_OPEN:
            return {
                ...state,
                open: !state.open
            }

        default:
            return state;
    }
}