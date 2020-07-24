import axios from "axios";
import {routes} from "../../src/Containers/Router/index";
import {replace, push} from "connected-react-router";

const baseUrl = "https://7nok4l82c2.execute-api.us-east-1.amazonaws.com/dev"

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

export const getGenres = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const headers = {
            headers: {
                'authorization':token,           
            }
    }
    try {
    
        const response = await axios.get(`${baseUrl}/genre`, headers)
    
        dispatch(setGenres(response.data))
      
    }
    catch (err) {
       
        console.error(err.response)
    }
}

export const createGenre = (genre) => async (dispatch) => {
    const token = window.localStorage.getItem("token");

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

        
        dispatch(getGenres())

    } catch (err) {
       
        console.error(err.response)
    
    }
}
