import filtersInitialState from '../initializers/filters'

export default (state = filtersInitialState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        default:
            return state
  }
}
