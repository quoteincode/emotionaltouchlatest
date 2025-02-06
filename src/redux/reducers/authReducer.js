import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "../constants/auth"
const initialState = {
    token: null,
    user: null,
    isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                user: payload.user,
                isLoggedIn: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                user: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default authReducer;