import api from "api/api";

const URLS = {
    addSearchHistory: '/historique/add',
    deleteSearchHistory: '/historique/',
    getSearchHistory: '/historique/'
}


export const addSearchHistory = (token: string, owner: string, text: string, profileId?: string, pictureUrl?: string) => {
    return api.post(URLS.addSearchHistory, { owner, text, profileId, pictureUrl }, {
        headers: { 'Authorization': token }
    })
}


export const deleteSearchHistory = (token: string, historiqueId: string) => {
    return api.delete(`${URLS.deleteSearchHistory}${historiqueId}`, {
        headers: { 'Authorization': token }
    })
}


export const getSearchHistory = (token: string, profileId: string) => {
    return api.get(`${URLS.getSearchHistory}${profileId}`, {
        headers: { 'Authorization': token }
    })
}

