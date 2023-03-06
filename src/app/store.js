import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'

let store;
export default  store = configureStore({
    reducer: {
        user: userReducer,
    },
});

