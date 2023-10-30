export type IUser = {
    _id?: string
    displayName?: string
    account_date?: string;
    address?: ObjectValue;
    adminAndPage?: [];
    coordonates?: CoordonateValue;
    country?: ObjectValue
    email?: string
    image?: string
    job?: []
    publicator?: []
    role?: number
    status?: string
    walletId?: ObjectValue
};

type ObjectValue = {
    value: string;
    isPrivate: boolean;
}

type CoordonateValue = {
    latitude: number;
    longitude: number;
    isPrivate: boolean;
}