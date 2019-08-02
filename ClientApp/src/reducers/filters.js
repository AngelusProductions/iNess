
const filtersDefaultState = {
    text: 'vis', 
    sortBy: 'name'
}

const reducer = (state = filtersDefaultState, action) => {
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
        default:
            return state
  }
}

export default reducer