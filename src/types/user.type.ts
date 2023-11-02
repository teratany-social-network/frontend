export type IUser = {
    _id?: string
    name: string
    localisation?: UserLocalisation;
    contact?: UserContact;
    deviantWalletId: string;
    image?: string
    role?: number,
    profileType?: string
    administratedProfiles?: Array<string>
    followers?: Array<string>
};

type UserLocalisation = {
    address: {
        isPublic: boolean;
        value: string;
    }
    coordonates: {
        isPublic: boolean;
        latitude: number;
        longitude: number;
    }
}

type UserContact = {
    email: string;
    phone: string;
    website: string;
}
