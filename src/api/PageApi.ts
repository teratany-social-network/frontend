import api from "api/api";
import { CoordonatesValue } from "../store/reducer/page.reducer";

const URLS = {
    addPage: "/profile/create"
}


export const addPage = (
    token: string | null | undefined,
    name: string | null | undefined,
    profileType: string | null | undefined,
    categories: string | null | undefined,
    coordonates: CoordonatesValue | null | undefined,
    description?: string | null | undefined,
    address?: string | null | undefined,
    email?: string | null | undefined,
    phoneNumber?: string | null | undefined,
    website?: string | null | undefined,
    country?: string | null | undefined,
) => {
    return api.post(URLS.addPage, {
        name,
        email,
        description,
        profileType,
        categories,
        localisation: {
            address: {
                value: address
            },
            country: {
                value: country,
            },
            coordonates,

        },
        contact: {
            phone: phoneNumber,
            email,
            website
        }
    }, {
        headers: { 'Authorization': token }
    })
}
