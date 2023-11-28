import api from "api/api";
const URLS = { uploadFile: "/upload" }
export const uploadFile = (images: any) => {
    return api.post(URLS.uploadFile, images)
}

export const FileServerURL = "https://file.teratany.org/public/"