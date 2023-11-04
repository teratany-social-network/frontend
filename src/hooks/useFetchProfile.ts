/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { withAsync } from "../helpers/withAsync";
import { getById } from "../api/UserApi";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IUser } from "../types/user.type";
import useToken from "./useToken";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";




const useFetchProfile = () => {

    const [profile, setProfile] = useState<IUser>();
    const token = useToken()
    const profileId = useSelector<RootState>((state) => state.teratany_user.id) as string


    useEffect(() => {


        async function fetchUser() {
            const { error, response } = await withAsync(() => getById(token, profileId));
            if (error instanceof AxiosError) {
                const error_message: string =
                    error?.response?.data?.error?.description || error?.response?.data || error.message;
                toast.error(error_message);
            } else {
                setProfile(response?.data as IUser);
            }

        }
        fetchUser()

    }, [])


    return profile;

}

export default useFetchProfile