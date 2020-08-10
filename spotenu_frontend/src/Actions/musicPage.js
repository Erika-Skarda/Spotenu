import axios from 'axios'

import { baseUrl, getToken } from "../Utils/constants"


export const setAllMusics = (musics) => ({
    type: "SET_ALL_MUSICS",
    payload: {
        musics
    }
})

export const setMyMusics = (musics) => ({
    type: "SET_MY_MUSICS",
    payload: {
        musics
    }
})
export const getMyMusics = () => async (dispatch) => {

    try {
    
        const response = await axios.get(`${baseUrl}/music/mymusics`,
            {
                headers: {
                    "authorization": getToken()
                }
            })
        
        dispatch(setMyMusics(response.data))
    }
    catch (err) {
        alert("Ocorreu um erro inesperado. Tente novamente")
    }
};

export const createMusic = (name) => async (dispatch) => {
    try {
        const body = {

            name
        }
        const response = await axios.post(`${baseUrl}/music/create`,
            body,
            {
                headers: {
                    "authorization": getToken()
                }
            })
 
        dispatch(getMyMusics())
    }
    catch (err) {
    
        console.error(err.response)
       
    }
}