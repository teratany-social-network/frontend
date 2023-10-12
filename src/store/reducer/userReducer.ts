import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserInitialState {
    id: string | null;
    username: string | null;
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: UserInitialState = {
    id: '',
    username: '',
    token: '',
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthentication: (state, action: PayloadAction<UserInitialState>) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        resetUserAuthentication: (state) => {
            state.id = null;
            state.username = null;
            state.token = null;
            state.isAuthenticated = false;
        }

    }
})

export const { setAuthentication } = userSlice.actions;
export default userSlice.reducer;