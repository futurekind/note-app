import * as actions from '../notes';

describe('Notes Actions', () => {

    describe('create()', () => {
        
        const action = actions.create({
            title: 'Some Title',
            body: 'Some content',
            id: 'some-id',
            updatedAt: '2017-02-23T16:19:09.984Z'
        })

        it('throws error when id is missing in payload', () => {
            expect(() => {
                actions.create({
                    foo: 'bar'
                })
            }).toThrow()
        })

        it('throws error when updatedAt is invalid in payload', () => {
            expect(() => {
                actions.create({
                    foo: 'bar',
                    id: 'some-id'
                })
            }).toThrow()
        })

        it('returns type', () => {
            expect(action.type).toBe(actions.types.NOTES__CREATE)
        })

        it('creates an payload object', () => {
            expect(action.payload).toEqual({
                title: 'Some Title',
                body: 'Some content',
                id: 'some-id',
                updatedAt: '2017-02-23T16:19:09.984Z'
            })
        })

    })

    describe('edit()', () => {
        const action = actions.edit('some-id', {
            title: 'some new title'
        })

        it('return object', () => {
            expect(action).toEqual({
                type: actions.types.NOTES__EDIT,
                id: 'some-id',
                payload: {
                    title: 'some new title'
                }
            })
        })
    })

    describe('remove()', () => {
        it('returns object', () => {
            expect(
                actions.remove('some-id')
            ).toEqual({
                type: actions.types.NOTES__DELETE,
                id: 'some-id'
            })
        })
    })

    describe('toggleOpen()', () => {
        it('returns object', () => {
            expect(
                actions.toggleOpen()
            ).toEqual({
                type: actions.types.NOTES__OPEN
            })
        })
    })

    describe('setActive()', () => {
        it('returns object', () => {
            expect(
                actions.setActive('some-id')
            ).toEqual({
                type: actions.types.NOTES__ACTIVE,
                id: 'some-id'
            })
        })
    })

    describe('setEditMode()', () => {

        it('returns object', () => {
            expect(
                actions.setEditMode('some-id')
            ).toEqual({
                type: actions.types.NOTES__EDIT_MODE,
                id: 'some-id'
            })
        })

    })

})