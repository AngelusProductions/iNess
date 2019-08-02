require('babel-polyfill')

const controller = '/api/Studies'

const getStudies = async () => {
    const url = `${controller}`
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    debugger
    const studies = await response.json()
    return { type: 'GET_STUDIES', studies }
}

export default getStudies