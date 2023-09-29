import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: JSON.parse(sessionStorage.getItem('USER')),
    },
    reducers: {
        login: (state, action) => {
            let u = { lastname: 'Leponge', firstname: 'Bob', mail: action.payload.email };
            sessionStorage.setItem('USER', JSON.stringify(u));
            state.value = u;
        },

        logout: (state, action) => {

            state.value = null;
            sessionStorage.removeItem('USER');
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer