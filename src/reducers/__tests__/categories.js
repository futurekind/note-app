import reducer, { initialState } from '../categories';
import * as actions from '../../actions/categories';

describe('Categories reducer', () => {

    let state;

    beforeEach(() => {
        state = reducer(undefined, {
            type: 'init'
        })
    })

    it('returns initialState', () => {
        expect(state).toEqual(initialState);
    })

    it(`handles ${actions.types.CAT__EDIT}`, () => {
        const newState = reducer(state, actions.edit('cat3', {
            label: 'Some Category'
        }))

        expect(newState.entities.cat3.label).toBe('Some Category');
    })

    it(`handles ${actions.types.CAT__TOGGLE_ACTIVE}`, () => {
        const newState = reducer(state, actions.toggleActive('cat2'))
        expect(newState.active).toContain('cat2')

        const newState2 = reducer(newState, actions.toggleActive('cat2'))
        expect(newState2.active).toEqual([])
    })

    it(`handles ${actions.types.CAT__TOGGLE_OPEN}`, () => {
        const newState = reducer(state, actions.toggleOpen())
        expect(newState.open).toBe(true)

        const newState2 = reducer(newState, actions.toggleOpen())
        expect(newState2.open).toBe(false)
    })

})