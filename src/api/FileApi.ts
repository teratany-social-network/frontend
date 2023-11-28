import api from "api/api";

const URLS = {
    uploadFile: "/upload"
}

export const uploadFile = (images: any) => {
    return api.post(URLS.uploadFile, images)
}

export const FileServerURL = "http://192.168.178.85:8080/public/"