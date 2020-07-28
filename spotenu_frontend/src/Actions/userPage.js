import axios from "axios";
import { routes } from "../../src/Containers/Router/index";
import { replace, push } from "connected-react-router";

const baseUrl = "https://7nok4l82c2.execute-api.us-east-1.amazonaws.com/dev"


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
//************************************************* //
export const setProfile = (profile) => ({
    type: "SET_PROFILE",
    payload: {
       profile
    }
})
//**************************************************//  
export const setAllBands = (bands) => ({
    type: "SET_ALL_BANDS",
    payload: {
        bands
    }
});
export const setSelectedBand = (band) =>({

        type: 'SET_SELECTED_BAND',
        payload: {
            band
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

};
//{
//     "id": "bf31a467-42f4-4336-b55b-d0a513a65fce",
//     "name": "Erika",
//     "email": "erika@labenu.com",
//     "nickname": "erikita",
//     "password": "$2a$12$ugFrUd8vga5ojuknsdKbQeOqjyyDrfMXXGQMMDnb7yE3kWXKauViW",
//     "role": "admin",
//     "description_band": null,
//     "is_approved": 1
// }
export const getProfile = () => async (dispatch) => { 
        const token = localStorage.getItem('token')
    try { 
    
        const response = await axios.get(`https://7nok4l82c2.execute-api.us-east-1.amazonaws.com/dev/user/profile`, 
        { 
            headers: { 
                 "authorization": token
            } 
        }); 
    dispatch(setProfile(response.data))
    console.log(response.data)
    
    }catch (err) { 
        console.log(err); 
    }};
  
export const approveBand = (bandId) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
       
      await axios.put(`${baseUrl}/user/approve`,
            { bandId },
            {
                headers: {

                    "authorization":token
                }
            })
            alert('Banda aprovada com sucesso!')
        //dispatch(getAllBands())
    }
    catch (err) {
      
        console.error(err.response)
     
    };
};
export const getAllUsers = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");

    try {
      
        const response = await axios.get(`${baseUrl}/user/all`, {
            headers: {

                "authorization": token,
            }
        })
      
        dispatch(setAllUsers(response.data))
    }
    catch (err) {
       
        console.error(err.response)    
    }

}

