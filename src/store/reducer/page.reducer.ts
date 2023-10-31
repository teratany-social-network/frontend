import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type CoordonatesValue = {
    latitude?: number | null,
    longitude?: number | null
}

export interface PageInitialState {
    email?: string | null;
    phoneNumber?: string | null;
    website?: string | null;
    name?: string | null;
    coordonates?: CoordonatesValue;
    description?: string;
    address?: string;
    country?: string;
    deviantWalletID?: string;
    pageType?: string;
    category?: string;
}

const initialState: PageInitialState = {
    email: '',
    phoneNumber: '',
    website: '',
    name: '',
    coordonates: {
        latitude: null,
        longitude: null
    },
    description: '',
    address: '',
    country: '',
    deviantWalletID: '',
    pageType: '',
    category: '',
}

export const pageSlice = createSlice({
    name: "teratany_page",
    initialState,
    reducers: {
        setPageInfo: (state, action: PayloadAction<PageInitialState>) => {

            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
            state.website = action.payload.website;
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.address = action.payload.address;
            state.country = action.payload.country;
            state.deviantWalletID = action.payload.deviantWalletID;
            state.pageType = action.payload.pageType;
            state.category = action.payload.category;

        },

        setPageCoordonates: (state, action: PayloadAction<PageInitialState>) => {
            state.coordonates = {
                latitude: action.payload.coordonates?.latitude,
                longitude: action.payload.coordonates?.longitude
            }
        },



        resetPageInfo: (state) => {
            state.email = '';
            state.phoneNumber = '';
            state.website = '';
            state.name = '';
            state.coordonates = {
                latitude: null,
                longitude: null
            };
            state.description = '';
            state.address = '';
            state.country = '';
            state.deviantWalletID = '';
            state.pageType = '';
            state.category = '';
        }

    }
})

export const { setPageInfo, setPageCoordonates, resetPageInfo } = pageSlice.actions;
export default pageSlice.reducer;