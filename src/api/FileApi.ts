import api from "api/api";

const URLS = {
    uploadFile: "/upload"
}

export const uploadFile = (images: FormData) => {
    return api.post(URLS.uploadFile, images)
}

export const FileServerURL = "http://localhost:8080/public/"