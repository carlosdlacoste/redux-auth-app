import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk('get/users', async () =>{
    try {
        const resp = await fetch("/api/users")
        const data = await resp.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default userSlice.reducer