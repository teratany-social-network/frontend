import api from "api/api";

const URLS = {
    postComment: '/publication/comment',
    getOrDeleteComment: '/publication/comments/',
}



export const getComments = (token: string, publicationId: string | undefined) => {
    return api.get(URLS.getOrDeleteComment + publicationId, {
        headers: {
            'Authorization': token
        }
    })
}

export const postComment = (token: string, profileId: string | undefined, content: string | undefined, publicationId: string | undefined) => {
    return api.post(URLS.postComment, { profileId, content, publicationId }, {
        headers: {
            'Authorization': token
        }
    })
}
export const deleteComment = (token: string, commentId: string | undefined) => {
    return api.delete(URLS.getOrDeleteComment + commentId, {
        headers: {
            'Authorization': token
        }
    })
}

