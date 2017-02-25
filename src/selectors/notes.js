import { createSelector } from 'reselect';

const getResults = state => state.notes.results;
const getEntities = state => state.notes.entities;
const getActive = state => state.notes.active;
const getOpen = state => state.notes.open;

export const getNotes = createSelector(
    getResults,
    getEntities,

    (results, entities) => results.slice().sort((a, b) => {
        const noteA = entities[a].updatedAt;
        const noteB = entities[b].updatedAt;

        if(noteA > noteB) return -1
        return 1
    })
)

export const getNotesEntities = getEntities;
export const getNotesActive = getActive;
export const getNotesOpen = getOpen;