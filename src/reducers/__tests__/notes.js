import reducer, { initialState } from '../notes';
import * as actions from '../../actions/notes';

describe('Notes reducer', () => {

    let state;

    beforeEach(() => {
        state = reducer(state, {
            type: 'init'
        })
    })

    it('returns initial state', () => {
        expect(state).toEqual(initialState);
    })

    it(`handles ${actions.types.NOTES__CREATE}`, () => {
        const nextState = reducer(state, actions.create({
            id: 'some-id',
            updatedAt: '2017-02-23T16:19:09.984Z',
            title: 'some title'
        }))

        expect(nextState.results).toEqual(['some-id'])
        expect(nextState.entities['some-id']).toEqual({
            id: 'some-id',
            updatedAt: '2017-02-23T16:19:09.984Z',
            title: 'some title'
        })
    })

    it(`handles ${actions.types.NOTES__EDIT}`, () => {
        const nextState = reducer(state, actions.create({
            id: 'some-id',
            updatedAt: '2017-02-23T16:19:09.984Z',
            title: 'some title'
        }))

        const nextState2 = reducer(nextState, actions.edit('some-id', {
            title: 'new title',
            foo: 'bar'
        }))
        
        expect(nextState2.entities['some-id'].title).toBe('new title')
    })

    it(`handles ${actions.types.NOTES__DELETE}`, () => {
        const nextState = reducer(state, actions.create({
            id: 'some-id',
            updatedAt: '2017-02-23T16:19:09.984Z',
            title: 'some title'
        }))

        const nextState2 = reducer(nextState, actions.create({
            id: 'some-id2',
            updatedAt: '2017-02-23T16:19:09.984Z',
            title: 'some title2'
        }))

        const nextState3 = reducer(nextState2, actions.remove('some-id'))
        
        expect(nextState3.results).toEqual(['some-id2'])
        expect(nextState3.entities['some-id']).toBeUndefined()
    })

    it(`handles ${actions.types.NOTES__ACTIVE}`, () => {
        const nextState = reducer(state, actions.setActive('some-id'))
        expect(nextState.active).toBe('some-id')
    })

    it(`handles ${actions.types.NOTES__OPEN}`, () => {
        let nextState = reducer(state, actions.toggleOpen())
        expect(nextState.open).toBe(true)

        nextState = reducer(nextState, actions.toggleOpen())
        expect(nextState.open).toBe(false)
        
    })

    it(`handles ${actions.types.NOTES__EDIT_MODE}`, () => {
        const nextState = reducer(state, actions.setEditMode('some-id'))

        expect(nextState.inEditMode).toBe('some-id');
    })

})