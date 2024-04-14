import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        
    }
})

export default userSlice.reducer