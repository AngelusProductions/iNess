import studiesInitialState from '../initializers/studies'

export default (state = studiesInitialState, action) => {
    switch (action.type) {
        case 'GET_STUDIES':
            return {
                ...state,
                studies: action.studies
            }
        default: 
            return state
    }
}