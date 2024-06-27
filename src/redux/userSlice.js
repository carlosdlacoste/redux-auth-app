import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import { selectAuthToken } from "./authSlice";


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

export const getUserByID = createAsyncThunk('get/user', async (params, thunkAPI) =>{
    const token = thunkAPI.getState().auth.token
    // console.log(token)
    try {
        const resp = await fetch(`/api/users/${params.id}`, {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        // console.log(token)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
})

export const addNewUser = createAsyncThunk('post/new_user', async (newUser) => {
    try {
        const resp = await fetch("/api/users", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "next-action": "users"
            },

            body: JSON.stringify(newUser),
        })
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    data: [],
    userByID: {},
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
            .addCase(addNewUser.fulfilled, (state, action) => {
                console.log('the user was registered successfully')
                state.loading = false
                state.error = null
            })
            .addCase(addNewUser.pending, (state, action) => {
                console.log('the user is being created in this moment')
                state.loading = true
                state.error = null
            })
            .addCase(addNewUser.rejected, (state, action) => {
                console.log('the user was not registered')
                state.loading = false
                state.error = action.payload
            })
            .addCase(getUserByID.fulfilled, (state, action) => {
                state.userByID = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getUserByID.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUserByID.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default userSlice.reducer