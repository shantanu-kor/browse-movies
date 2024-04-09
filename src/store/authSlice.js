import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuth: false };

const authSlice = createSlice({
    name: "Authenticated",
    initialState: initialAuthState,
    reducers: {
        setFalse(state) {
            state.isAuth = false
        },
        setTrue(state) {
            state.isAuth = true
        }
    } 
});

export const authActions = authSlice.actions;

export default authSlice.reducer;