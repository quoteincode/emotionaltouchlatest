import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "../constants/auth";
export const doLogin = (token,user) => (dispatch) => {
    dispatch({
        type:LOGIN_SUCCESS,
        payload:{
            token,
            user,
        }
    })
}

export const doLogout = () => (dispatch) => {
    dispatch({
        type:LOGOUT_SUCCESS
    })
}