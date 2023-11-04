import api from "api/api";

const URLS = {
    getByToken: '/profile/byToken',
    getById: '/profile/',
    updateGeneralInfo: '/profile/general',
    updateProfileImage: "/profile/image",
    updateUserPassword: "/profile/password",
    updateCoordonates: "/profile/localisation",
    updateCategory: "/profile/categories",
}

export const getById = (token: string, id: string | undefined) => {

    return api.get(URLS.getById + id, {
        headers: { 'Authorization': token }
    })
}
export const getUserByToken = (token: string) => {
    return api.get(URLS.getByToken, {
        headers: { 'Authorization': token }
    })
}
export const updateGeneralInfo = (token: string, id: string | undefined, name: string | undefined, email: string | undefined, description?: string | undefined) => {
    return api.patch(URLS.updateGeneralInfo, { id, name, email, description }, {
        headers: { 'Authorization': token }
    })
}

export const updateProfileImage = (token: string, id: string | undefined, imageUrl: any) => {
    return api.patch(URLS.updateProfileImage, { id, image: imageUrl[0] }, {
        headers: { 'Authorization': token }
    })
}

export const updatePassword = (token: string, password: string, newPassword: string) => {
    return api.patch(URLS.updateUserPassword, { password, newPassword }, {
        headers: { 'Authorization': token }
    })
}

export const updateCategory = (token: string, id: string | undefined, categories: string | undefined) => {
    return api.patch(URLS.updateCategory, { id, categories }, {
        headers: { 'Authorization': token }
    })
}

export const updateLocationParameter = (token: string, id: string | undefined, latitude: number, longitude: number, isPrivate: boolean) => {
    return api.patch(URLS.updateCoordonates,
        {
            id,
            coordonates: {
                latitude,
                longitude,
                isPrivate
            }
        }, {
        headers: { 'Authorization': token }
    })
}

