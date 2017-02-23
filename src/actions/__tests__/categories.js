import * as actions from '../categories';

describe('Categories Actions', () => {

    describe('edit()', () => {
        const action = actions.edit('some_id', {
            some: 'data'
        })

        it('returns action', () => {
            expect(action).toEqual({
                type: actions.types.CAT__EDIT,
                id: 'some_id',
                payload: {
                    some: 'data'
                }
            })
        })
    })

    describe('toggleActive()', () => {
        const action = actions.toggleActive('some_id')

        it('returns action', () => {
            expect(action).toEqual({
                type: actions.types.CAT__TOGGLE_ACTIVE,
                id: 'some_id'
            })
        })
    })

    describe('toggleOpen()', () => {
        const action = actions.toggleOpen()

        it('returns action', () => {
            expect(action).toEqual({
                type: actions.types.CAT__TOGGLE_OPEN
            })
        })
    })

})