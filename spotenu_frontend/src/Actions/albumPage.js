import axios from 'axios'
import { routes } from "../../src/Containers/Router/index";
import { replace, push } from "connected-react-router";
import { baseUrl, getToken } from "../Utils/constants"

export const setAlbuns = (albuns) => ({
    type: "SET_ALBUM",
    payload: {
        albuns
    }
});
export const setSelectedAlbum = (id) =>({

    type: 'SET_SELECTED_ALBUM',
    payload: {
        id
    }
});
export const redirectCreateAlbum = () => async(dispatch) => {
    try {
        dispatch(push(routes.albumcreate))
    } catch(err) {
        console.log(err)
        alert("Ocorreu um erro inesperado. Tente novamente")
    }
};

export const createAlbum = (albumData) => async (dispatch) => {
    try {
   
        const response = await axios.post(`${baseUrl}/album/create`,
            albumData,
            {
                headers: {
                    "authorization": getToken()
                }
            })
       
         dispatch(getAlbum())
    }
    catch (err) {

        alert("Ocorreu um erro inesperado. Tente novamente")
       
    }
};
export const getAlbum = () => async (dispatch) => {
    try {
        
        const response = await axios.get(`${baseUrl}/album`,
            {
                headers: {
                    authorization: getToken()
                }
            })
        
        dispatch(setAlbuns(response.data))
        console.log(response.data)

    } catch (err) {
        
        console.err("Algo errado não está certo!")
    
    }
}
//Via params --> ARRUMAR AS TABELAS DE DELEÇÂO
export const deleteAlbum = (id) => async (dispatch) => {

    try {
      
        const response = await axios.delete(`${baseUrl}/album/delete/${id}`,
            {
                headers: {
                    authorization: getToken()
                }
            })
      
    
        dispatch(getAlbum())
    }
    catch (err) {
      
        console.err("Não foi possivel deletar o albúm!")
     
    }
}