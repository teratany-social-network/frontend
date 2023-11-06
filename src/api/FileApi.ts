import api from "api/api";

const URLS = {
    uploadFile: "/upload"
}

export const uploadFile = (images: any) => {
    return api.post(URLS.uploadFile, images)
}

export const FileServerURL = "http://localhost:8080/public/"