import axios from "axios";
import {routes} from "../../src/containers/Router";
import {replace, push} from "connected-react-router";


const baseUrl = ""


export const setUserInfo = (info) => { 
    return { type: "SET_USER_INFO", 
    payload: { info }, 
  };
};

export const login = (email, password) => async(dispatch) => {
    const body = {
        email,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/login`, body)
        localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("user", response.data.user)
        
        if(response.data.user.hasAddress  ) {
            dispatch(replace(routes.feedpage))
        } else {
            dispatch(push(routes.myadress))
        }
    } catch(error){
        window.alert("Usuário não encontrado!")
        console.log(email,password)
    }
}
export const redirectSignUp = () => async(dispatch) => {
    try {
        dispatch(push(routes.signup))
    } catch {
        alert("Ocorreu um erro inesperado. Tente novamente")
    }
}