import api from "api/api";

const URLS = {
    getByToken: '/user/byToken',
    updateGeneralInfo: '/user/profile',
    updateProfileImage: "/user/profileImage",
    updateUserPassword: "/user/password",
    updateCoordonates: "/user/coordonates",
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

export const updateProfileImage = (token: string, imageUrl: any) => {
    return api.patch(URLS.updateProfileImage, { imageUrl: imageUrl[0] }, {
        headers: { 'Authorization': token }
    })
}

export const updatePassword = (token: string, password: string, newPassword: string) => {
    return api.patch(URLS.updateUserPassword, { password, newPassword }, {
        headers: { 'Authorization': token }
    })
}

export const updateLocationParameter = (token: string, latitude: number, longitude: number, isPrivate: boolean) => {
    return api.patch(URLS.updateCoordonates,
        {
            coordonates: {
                latitude,
                longitude,
                isPrivate
            }
        }, {
        headers: { 'Authorization': token }
    })
}

