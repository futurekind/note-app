import * as selectors from '../notes';

describe('Notes Selectors', () => {

    const state = {
        notes: {
            results: ['note1', 'note2', 'note3'],
            entities: {
                note1: {
                    id: 'note1',
                    title: 'note 1',
                    updatedAt: '2017-02-20T16:19:09.984Z',
                    updatedAtHumanized: '2017-02-20T16:19:09.984Z',
                },
                note2: {
                    id: 'note2',
                    title: 'note 2',
                    updatedAt: '2017-02-23T16:19:09.984Z',
                    updatedAtHumanized: '2017-02-20T16:19:09.984Z',
                },
                note3: {
                    id: 'note3',
                    title: 'note 3',
                    updatedAt: '2017-02-22T16:19:09.984Z',
                    updatedAtHumanized: '2017-02-20T16:19:09.984Z',
                }
            },
            open: true,
            active: 'note2',
            inEditMode: 'note3'
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
            expect(result.note1).toBeDefined()
            expect(result.note2).toBeDefined()
            expect(result.note3).toBeDefined()
        })

        it('returns a readable updatedAt field on each entitiy', () => {
            const test = {
                e1: { updatedAt: '2017-02-20T16:19:09.984Z' },
                e2: { updatedAt: '2017-02-14T16:19:09.984Z' },
                e3: { updatedAt: '2017-02-01T16:19:09.984Z' },
            }

            const result = selectors.getNotesEntities({
                notes: {
                    entities: test
                }
            });

            expect(result.e1.updatedAtHumanized).toBeDefined()
            expect(result.e2.updatedAtHumanized).toBeDefined()
            expect(result.e3.updatedAtHumanized).toBeDefined()
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

    describe('getNoteInEditMode()', () => {
        const result = selectors.getNoteInEditMode(state)

        it('returns id of note in edit mode', () => {
            expect(result).toBe('note3')
        })
    })

})