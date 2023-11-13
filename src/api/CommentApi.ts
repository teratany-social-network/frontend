import api from "api/api";

const URLS = {
    postComment: '/publication/comment',
    getComments: '/publication/comments/',
    deleteComment: '/publication/comment/',
}



export const getComments = (token: string, publicationId: string | undefined) => {
    return api.get(URLS.getComments + publicationId, {
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
    return api.delete(URLS.deleteComment + commentId, {
        headers: {
            'Authorization': token
        }
    })
}

