import api from "api/api";
import { CoordonatesValue } from "../store/reducer/page.reducer";

const URLS = {
    addPage: "/pages"
}

export const addPage = (
    token: string | null | undefined,
    name: string | null | undefined,
    category: string | null | undefined,
    coordonates: CoordonatesValue | null | undefined,
    pageType: string | null | undefined,
    address?: string | null | undefined,
    email?: string | null | undefined,
    phoneNumber?: string | null | undefined,
    website?: string | null | undefined,
    description?: string | null | undefined,
    country?: string | null | undefined,
    deviantWalletID?: string | null | undefined,
) => {
    return api.post(URLS.addPage, {
        email,
        phoneNumber,
        website,
        name,
        coordonates,
        description,
        address,
        country,
        deviantWalletID,
        pageType,
        category
    }, {
        headers: { 'Authorization': token }
    })
}
