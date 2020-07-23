import axios from "axios";
import { routes } from "../../src/Containers/Router/index";
import { replace, push } from "connected-react-router";

const baseUrl = "http://localhost:3000"


export const setUserInfo = (info) => ({ 
   type: "SET_USER_INFO", 
    payload: { 
        info    
  }
});
export const setAllUsers = (users) => ({
    type: "SET_ALL_USERS",
    payload: {
        users
    }
});
//**************************************************//  
export const setAllBands = (bands) => ({
    type: "SET_ALL_BANDS",
    payload: {
        bands
    }
});
export const getBandId = (id) =>({

        type: 'GET_BAND_ID',
        payload: {
            id
        }
});
//*************************************************************//
export const login = (emailOrNickname, password) => async(dispatch) => {
    const body = {
        emailOrNickname,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/user/login`, body)
        
        const token = response.data.Access_token
        const userRole = response.data.Role
      
        localStorage.setItem("token", token)
        localStorage.setItem("userRole", userRole)
        // Ver como será dispatch
       

    } catch(err){

        alert("Ocorreu um erro inesperado. Tente novamente")
        console.log(emailOrNickname,password, err.message)
    } 
    
    dispatch(push(routes.home))
};
export const redirectSignUp = () => async(dispatch) => {
    try {
        dispatch(push(routes.signup))
    } catch(err) {
        console.log(err)
        alert("Ocorreu um erro inesperado. Tente novamente")
    }
};

 export const signUp = (
    name, 
    email, 
    nickname, 
    password, 
    role, 
    description_band
    ) => async (dispatch) => {

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
          const userRole = response.data.Role

          localStorage.setItem("token", token)
          localStorage.setItem("userRole", userRole)
          dispatch(push(routes.home))
      
          alert("Usuário cadastrado com sucesso!");

      } catch(err) {
          console.log(err)
          alert("Ocorreu um erro inesperado. Tente novamente")
      }
 };
 export const getAllBands = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
       
        const response = await axios.get(`${baseUrl}/user/band`, {
            headers: {
                "authorization": token
            }
        })
       
        dispatch(setAllBands(response.data))
        console.log(response.data)
    }
    catch (err) {
    
        console.error(err.response)
    }   
};
export const getBandDetails = (id) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get(
        `${baseUrl}/user/id`,
        { id },
        {
          headers: {
            "authorization": token,
          },
        }
      );

      dispatch(setUserInfo(response.data));
      console.log(response.data.trip);
};
export const approveBand = (id) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
       
      await axios.post(`${baseUrl}/user/approve`,
            { id },
            {
                headers: {

                    "authorization":token
                }
            })
            alert('Banda aprovada com sucesso!')
        dispatch(getAllBands())
    }
    catch (err) {
      
        console.error(err.response)
     
    }

}