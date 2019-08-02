
const studiesDefaultState = {
    studies: []
}

const reducer = (state = studiesDefaultState, action) => {
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

export default reducer