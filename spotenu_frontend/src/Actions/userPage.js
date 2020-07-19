import axios from "axios";
import {routes} from "../../src/Containers/Router/index";
import {replace, push} from "connected-react-router";


const baseUrl = "http://localhost:3000"


export const setUserInfo = (info) => { 
    return { type: "SET_USER_INFO", 
    payload: { 
        info 
    }, 
  };
};
//**************************************************//
export const setOpen = (option) => ({
    type: "SET_OPEN",
    payload: {
        option
    }
})

export const setMessage = (text, color) => ({
    type: "SET_MESSAGE",
    payload: {
        text,
        color
    }
})

export const setInputSearch = (inputData) => ({
    type: 'SET_INPUT_SEARCH',
    payload: {
        inputData
    }
})

export const setLoading = (option) => ({
    type: 'SET_LOADING',
    payload: {
        option
    }
})
//*************************************************************//
export const login = (emailOrNickname, password) => async(dispatch) => {
    const body = {
        emailOrNickname,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/user/login`, body)
        localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("user", response.data.user)
        
        // if(response.data.user.hasAddress  ) {
        //     dispatch(replace(routes.feedpage))
        // } else {
        //     dispatch(push(routes.myadress))
        // }
    } catch(error){
        window.alert("Usuário não encontrado!")
        console.log(emailOrNickname,password)
    }
};
export const redirectSignUp = () => async(dispatch) => {
    try {
        dispatch(push(routes.signup))
    } catch {
        alert("Ocorreu um erro inesperado. Tente novamente")
    }
};

 export const singUp = (name, email, nickname, password, role, description_band) => async (dispatch) => {
     const body = {
         name,
         email,
         nickname,
         password,
         role,
         description_band
     }
      try {
          
          //dispatch(setLoading(true))
          const response = await axios.post(`${baseUrl}/user/signup`, body)
          //await dispatch(setLoading(false))
          const token = response.data.Access_token
          const userRole = response.data.role
          localStorage.setItem("token", token)
          localStorage.setItem("userRole", userRole)
          //dispatch(push(routes.home))
          localStorage.setItem("token", response.data.token)
             alert("Usuário cadastrado com sucesso!")
      } catch {
          alert("Ocorreu um erro inesperado. Tente novamente")
      }
 };