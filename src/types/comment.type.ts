import { ProfileType } from "./publication.type";

export interface IComment {
    _id?: string,
    profile: ProfileType,
    content: string,
    date: string
}