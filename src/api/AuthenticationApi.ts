import api from "api/api";

const URLS = {
    signin: '/user/authentication/signin',
    register: '/user/authentication/register'
}

type signinData = {

}
type registerData = {

}

export const signinAuth = () => {
    return api.post<signinData>(URLS.signin, {})
}

export const registerAuth = () => {
    return api.post<registerData>(URLS.register, {})
}