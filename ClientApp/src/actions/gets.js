import { capitalize } from "../constants";

export const GET = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

export const getListOf = (listName, controller = 'studies') = async (dispatch) => {
    const response = await fetch(`/api/${controller}/Get${capitalize(listName)}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    const list = await response.json()
    dispatch( { type: `GET_LIST_OF`,  payload: { listName, list }  } )
}