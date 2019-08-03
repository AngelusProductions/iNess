const controller = '/api/Studies'

const getStudies = async (dispatch) => {
    const url = `${controller}`
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    const studies = await response.json()
    dispatch( { type: 'GET_STUDIES', studies } )
}

export default getStudies