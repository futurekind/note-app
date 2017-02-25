import * as selectors from '../categories';

describe('Categories Selectors', () => {

    const state = {
        categories: {
            results: ['cat1', 'cat2'],
            entities: {
                cat1: {
                    id: 'cat1',
                    label: 'zName'
                },
                cat2: {
                    id: 'cat2',
                    label: 'aName'
                }
            },
            active: ['cat2'],
            open: false
        }
    }

    describe('getCategories()', () => {

        it('returns sorted results array', () => {
            expect(
                selectors.getCategories(state)
            ).toEqual(
                ['cat2', 'cat1']
            )
        })

    })

    
    describe('getCategoriesEntities()', () => {
        it('returns entities object', () => {
            expect(
                selectors.getCategoriesEntities(state)
            ).toEqual(state.categories.entities)
        })
    })

    describe('getCategoriesActive()', () => {
        it('returns active array', () => {
            expect(
                selectors.getCategoriesActive(state)
            ).toEqual(state.categories.active)
        })
    })

    describe('getCategoriesOpen()', () => {
        it('returns active array', () => {
            expect(
                selectors.getCategoriesOpen(state)
            ).toEqual(state.categories.open)
        })
    })

})