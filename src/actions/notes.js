import { isValidDate } from '../utils/date';

export const types = {
    NOTES__CREATE: 'NOTES__CREATE',
    NOTES__EDIT: 'NOTES__EDIT',
    NOTES__DELETE: 'NOTES__DELETE',
    NOTES__OPEN: 'NOTES__OPEN',
    NOTES__ACTIVE: 'NOTES__ACTIVE',
    NOTES__EDIT_MODE: 'NOTES__EDIT_MODE',
}

export const create = data => {
    if(!data.id) throw new Error('A unique `id` field is missing in the data payload.')
    if(!isValidDate(data.updatedAt)) throw new Error('An invalid iso string is provided in `updatedAt` field in the data payload.')

    return {
        type: types.NOTES__CREATE,
        payload: data
    }
}

export const edit = (id, data) => ({
    type: types.NOTES__EDIT,
    id,
    payload: data
})

export const remove = id => ({
    type: types.NOTES__DELETE,
    id
})

export const toggleOpen = () => ({
    type: types.NOTES__OPEN
})

export const setActive = (id) => ({
    type: types.NOTES__ACTIVE,
    id
})

export const setEditMode = (id) => ({
    type: types.NOTES__EDIT_MODE,
    id
})