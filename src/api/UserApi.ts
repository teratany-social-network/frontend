import api from "api/api";

const URLS = {
    getByToken: '/user/byToken',
    updateGeneralInfo: '/user/profile',
}



export const getUserByToken = (token: string) => {
    return api.get(URLS.getByToken, {
        headers: { 'Authorization': token }
    })
}
export const updateGeneralInfo = (token: string, displayName: string | undefined, email: string | undefined, address: string | undefined, addressIsPrivate: boolean | undefined) => {
    return api.patch(URLS.updateGeneralInfo, { displayName, email, address: { value: address, isPrivate: addressIsPrivate } }, {
        headers: { 'Authorization': token }
    })
}

