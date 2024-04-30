import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/userSlice";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer:{
        users: userReducer,
        auth: authSlice
    }
})