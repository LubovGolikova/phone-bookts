import {createSlice} from "@reduxjs/toolkit";


export interface  AuthState {
    email?: string | null;
    authenticated?: boolean;
    loaded?: boolean;
    error?: boolean;
}

const initialState: AuthState = {
    email: undefined,
    authenticated: undefined,
    loaded: undefined,
    error: undefined
};

export const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers: {
        clearState:(state =  initialState) => {
            state.email = "";
            state.authenticated = false;
            state.loaded = false;
            state.error = false;
        },
        loginRequest:(state) => {
            state.loaded= true;
        },
        loginSuccess:(state,action) => {
            state.email = action.payload;
            state.authenticated = true;
            localStorage.setItem('email',JSON.stringify(action.payload))
        },
        loginFail:(state) => {
            state.error = true;
        },
        logoutSuccess: () => {

        }
    }
});

export const {loginRequest, loginSuccess, loginFail, logoutSuccess, clearState} = authSlice.actions;
export default authSlice.reducer;
