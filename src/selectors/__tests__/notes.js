import * as selectors from '../notes';

describe('Notes Selectors', () => {

    const state = {
        notes: {
            results: ['note1', 'note2', 'note3'],
            entities: {
                note1: {
                    id: 'note1',
                    title: 'note 1',
                    updatedAt: '2017-02-20T16:19:09.984Z'
                },
                note2: {
                    id: 'note2',
                    title: 'note 2',
                    updatedAt: '2017-02-23T16:19:09.984Z'
                },
                note3: {
                    id: 'note3',
                    title: 'note 3',
                    updatedAt: '2017-02-22T16:19:09.984Z'
                }
            },
            open: true,
            active: 'note2'
        }
    }

    describe('getNotes()', () => {
        const result = selectors.getNotes(state)

        it('returns sorted results array', () => {
            expect(result).toEqual(
                ['note2', 'note3', 'note1']
            )
        })
    })

    describe('getNotesEntities()', () => {
        const result = selectors.getNotesEntities(state)

        it('returns entities object', () => {
            expect(result).toEqual(state.notes.entities)
        })
    })

    describe('getNotesActive()', () => {
        const result = selectors.getNotesActive(state)

        it('returns active field', () => {
            expect(result).toEqual(state.notes.active)
        })
    })

    describe('getNotesOpen()', () => {
        const result = selectors.getNotesOpen(state)

        it('returns open field', () => {
            expect(result).toEqual(state.notes.open)
        })
    })

})