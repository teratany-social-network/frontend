export type IUser = {
    _id?: string
    displayName?: string
    account_date?: string;
    address?: ObjectValue;
    adminAndPage?: [];
    coordonates?: Object;
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