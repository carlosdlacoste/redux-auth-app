import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/user", async (email, password) => {
    const state = getState()
    try {
        const resp = await fetch('/api/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + state.auth.token
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await resp.json()
        console.log(data)
        // return data
    } catch (error) {
        console.log(error);
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        userLoggedIn: {},
        loading: false,
        error: null
    },
    reducers: {
        // logout: (state) => {
        //     state.isLoggedIn = false
        //     state.user = null
        // }
    },
    extraReducers: (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
            const {token, user} = action.payload
            state.token = token
            state.userLoggedIn = user
            state.loading = false
            state.error = null
        })
        .addCase(login.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default authSlice.reducer