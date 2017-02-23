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

})