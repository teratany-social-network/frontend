import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type AccountType = {
    id: string | null;
    name: string | null;
    followers?: number;
    image?: string;
}

export interface AccountInitialState {
    account: Array<AccountType>
}

const initialState: AccountInitialState = {
    account: []
}

export const accountSlice = createSlice({
    name: "teratany_account",
    initialState,
    reducers: {
        setAccountConnected: (state, action: PayloadAction<AccountInitialState>) => {

            state.account = action.payload.account
        },
        resetAccountConnected: (state) => {
            state.account = []
        }

    }
})

export const { setAccountConnected, resetAccountConnected } = accountSlice.actions;
export default accountSlice.reducer;