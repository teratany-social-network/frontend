import api from "api/api";

const URLS = {
    signin: '/user/authentication/signin',
    register: '/user/authentication/signup'
}


export const signinAuth = (email: string, password: string) => {
    return api.post(URLS.signin, { email, password })
}

export const registerAuth = (email: string, displayName: string, password: string) => {
    return api.post(URLS.register, { email, displayName, password })
}