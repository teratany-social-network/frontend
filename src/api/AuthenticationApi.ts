import api from "api/api";

const URLS = {
    signin: '/authentication/signin',
    register: '/authentication/signup'
}


export const signinAuth = (email: string, password: string) => {
    return api.post(URLS.signin, { email, password })
}

export const registerAuth = (email: string, name: string, password: string) => {
    return api.post(URLS.register, { email, name, password })
}