import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserInitialState {
    id: string | null;
    displayName: string | null;
    email: string | null;
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: UserInitialState = {
    id: '',
    displayName: '',
    email: '',
    token: '',
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: "teratany_user",
    initialState,
    reducers: {
        setAuthentication: (state, action: PayloadAction<UserInitialState>) => {
            state.id = action.payload.id;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        resetUserAuthentication: (state) => {
            state.id = null;
            state.displayName = null;
            state.email = null;
            state.token = null;
            state.isAuthenticated = false;
        }

    }
})

export const { setAuthentication, resetUserAuthentication } = userSlice.actions;
export default userSlice.reducer;