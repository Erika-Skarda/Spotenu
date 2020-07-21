import axios from "axios";
import {routes} from "../../src/Containers/Router/index";
import {replace, push} from "connected-react-router";

const baseUrl = "http://localhost:3000"

export const setGenres = (genres) => ({
    type: "SET_GENRES",
    payload: {
        genres
    }
})
export const setGenreSelected = (genreId) => ({
    type: 'SET_GENRE_SELECTED',
    payload: {
        genreId
    }
})
export const setMessage = (text, color) => ({
    type: "SET_MESSAGE",
    payload: {
        text,
        color
    }
})
export const getGenres = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const headers = {
            headers: {
                'aauthorization':token,           
            }
    }
    try {
    
        const response = await axios.get(`${baseUrl}/genre`, headers)
    
        dispatch(setGenres(response.data))
    }
    catch (err) {
       
        console.error(err.response)
        dispatch(setMessage(err?.response?.data?.message || "Não foi possivel acessar a lista de gêneros!", "red"))
        
    }
}

export const createGenre = (genre) => async (dispatch) => {

    const body = {
        genre
    }
    try {
        
        const response = await axios.post(`${baseUrl}/genre/create`,
            body,
            {
                headers: {
                    "authorization": token
                }
            })

        dispatch(setMessage(response?.data?.message, "green"))
        dispatch(getGenres())

    } catch (err) {
       
        dispatch(setMessage(err?.response?.data?.message || "Não foi possivel cria o gênero", "red"))
    
    }
}
