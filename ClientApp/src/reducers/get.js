import initialState from '../initializers/studies'

export default (state = initialState, { type, payload: { listName, list } }) => {
    switch (type) {
        case 'GET_LIST_OF':
            return {
                ...state,
                [listName]: list
            }
        default: 
            return state
    }
}