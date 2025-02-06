import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'

// import networkStatusReducer from './reducers/networkStatusSlice';
export default configureStore({
    reducer: {
        auth: authReducer,
        // networkStatus: networkStatusReducer,
    },
});