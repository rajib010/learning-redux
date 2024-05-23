import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    authUsers: [],
};

export const authSlice = createSlice({
    name: 'auth', // name here should match the key in store 
    initialState,
    reducers: {
        addAuthUser: (state, action) => {
            const authUser = {
                id: nanoid(),
                text: action.payload
            };
            state.authUsers.push(authUser);
        },
        removeAuthUser: (state, action) => {
            state.authUsers = state.authUsers.filter(
                (authUser) => authUser.id !== action.payload
            );
        }
    }
});

export const { addAuthUser, removeAuthUser } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.authUsers.length > 0;

export default authSlice.reducer;
 