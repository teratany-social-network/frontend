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
        addAccountConnected: (state, action: PayloadAction<AccountType>) => {

            state.account.push(action.payload)
        },
        resetAccountConnected: (state) => {
            state.account = []
        }

    }
})

export const { setAccountConnected, resetAccountConnected, addAccountConnected } = accountSlice.actions;
export default accountSlice.reducer;