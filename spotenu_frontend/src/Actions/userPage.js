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
export const setMessage = (text, color) => ({
    type: "SET_MESSAGE",
    payload: {
        text,
        color
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
        
        const token = response.data.Access_token
        const userRole = response.data.role
      
        localStorage.setItem("token", token)
        localStorage.setItem("userRole", userRole)
        // Ver como será dispatch
        dispatch(push(routes.home))

    } catch(err){

       dispatch(setMessage(err?.response?.data?.message || "Não foi possivel fazer o login!", "red"))
    console.log(emailOrNickname,password)
    }
};
export const redirectSignUp = () => async(dispatch) => {
    try {
        dispatch(push(routes.signup))
    } catch(err) {
        console.log(err)
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
          
          const response = await axios.post(`${baseUrl}/user/signup`, body)
          
          const token = response.data.Access_token
          const userRole = response.data.role

          localStorage.setItem("token", token)
          localStorage.setItem("userRole", userRole)
          dispatch(push(routes.home))
      
            alert("Usuário cadastrado com sucesso!")
      } catch {
          alert("Ocorreu um erro inesperado. Tente novamente")
      }
 };