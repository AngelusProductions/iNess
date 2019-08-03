import filtersInitialState from '../initializers/filters'

export default (state = filtersInitialState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            }
        case 'SORT_BY_SPONSOR':
            return {
                ...state,
                sortBy: 'sponsor'
            }
        case 'SORT_BY_PROTOCOL':
            return {
                ...state,
                sortBy: 'protocol'
            }
        default:
            return state
  }
}
