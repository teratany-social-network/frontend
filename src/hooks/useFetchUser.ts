/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { withAsync } from "../helpers/withAsync";
import { getUserByToken } from "../api/UserApi";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IUser } from "../types/user.type";
import useToken from "./useToken";




const useFetchUser = () => {
    const [user, setUser] = useState<IUser>();
    const token = useToken()


    useEffect(() => {


        async function fetchUser() {
            const { error, response } = await withAsync(() => getUserByToken(token));
            if (error instanceof AxiosError) {
                console.log(error)
                const error_message: string =
                    error?.response?.data?.error?.description || error?.response?.data || error.message;
                toast.error(error_message);
            } else {
                setUser(response?.data as IUser);
            }

        }
        fetchUser()

    }, [])


    return user;

}

export default useFetchUser