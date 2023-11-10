import { ProfileFilter } from "./profile.type";
import { IPublication } from "./publication.type";

export interface ISearch {
    profiles: ProfileFilter[],
    publications: IPublication[]
}