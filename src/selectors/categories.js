import { createSelector } from 'reselect';

const getResults = state => state.categories.results;
const getEntities = state => state.categories.entities;
const getActive = state => state.categories.active;
const getOpen = state => state.categories.open;

export const getCategories = createSelector(
    getResults,
    getEntities,

    (results, entities) => results.slice().sort((a, b) => {
        const catA = entities[a].label
        const catB = entities[b].label

        if(catA > catB) return 1
        return -1
    })
);

export const getCategoriesEntities = getEntities
export const getCategoriesActive = getActive
export const getCategoriesOpen = getOpen