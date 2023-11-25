export interface IPublication {
    _id: string
    profile: ProfileType
    content: string
    images?: string[]
    numberOfComments?: number;
    numberOfReactions?: number;
    date: string;
    isReacted: boolean
}

export type ProfileType = {
    image: string;
    name: string;
    profileType: string;
    _id: string;
}