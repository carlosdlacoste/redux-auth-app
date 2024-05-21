import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/user", async ({email, password}) => {
    // createAsyncThunk espera recibir siempre un objeto, entonces si se va a recibir mas de un parametro se deben colocar entre los simbolos de llaves para simular ese objeto que se recibe, la otra forma es mandar y recibir directamente el objeto con la informacion dentro del mismo
    try {
        const resp = await fetch('/api/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        if (!resp.ok) {
            // Si la respuesta no es exitosa, lanza un error con el estado y el texto de la respuesta
            throw new Error(`HTTP error! status: ${resp.status}, ${await resp.text()}`);
        }
        const data = await resp.json()
        sessionStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        // console.log(data)
        return data
    } catch (error) {
        console.error('Error en la solicitud:', error);
        // Utiliza rejectWithValue para pasar el error a tu lógica de Redux
        // return rejectWithValue(error.message);
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
        // setUserWithStorage: (state, action) => {
        //     const {token, user} = action.payload
        //     state.token = token
        //     state.userLoggedIn = user
        //     sessionStorage.setItem("token", state.token)
        //     // localStorage.setItem("user", state.userLoggedIn)
        // },
        removeUserFromStorage: (state) => {
            sessionStorage.removeItem("token")
            localStorage.removeItem("user")
            state.token = null
            state.userLoggedIn = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token
                state.userLoggedIn = action.payload.user
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


export const {removeUserFromStorage} = authSlice.actions
export default authSlice.reducer