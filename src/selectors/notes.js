import { createSelector } from 'reselect';
import { getRelativeDate } from '../utils/date';

const getResults = state => state.notes.results;
const getEntities = state => state.notes.entities;
const getActive = state => state.notes.active;
const getOpen = state => state.notes.open;
const getInEditMode = state => state.notes.inEditMode;

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

export const getNotesEntities = createSelector(
    getEntities,
    entities => Object.keys(entities).reduce((prev, key) => {
        return {
            ...prev,
            [key]: {
                ...entities[key],
                updatedAtHumanized: getRelativeDate(
                    entities[key].updatedAt
                )
            }
        }
    }, {})
)
export const getNotesActive = getActive;
export const getNotesOpen = getOpen;
export const getNoteInEditMode = getInEditMode;