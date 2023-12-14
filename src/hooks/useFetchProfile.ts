/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { withAsync } from "../helpers/withAsync";
import { getById } from "../api/ProfileApi";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IProfile } from "../types/profile.type";
import useToken from "./useToken";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";




const useFetchProfile = () => {

    const [profile, setProfile] = useState<IProfile>();
    const token = useToken()
    const profileId = useSelector<RootState>((state) => state.teratany_user.id) as string


    useEffect(() => {


        async function fetchUser() {
            if (profileId) {
                const { error, response } = await withAsync(() => getById(token, profileId, profileId));
                if (error instanceof AxiosError) {
                    const error_message: string =
                        error?.response?.data?.error?.description || error?.response?.data || error.message;
                    toast.error(error_message);
                } else {
                    setProfile(response?.data as IProfile);
                }
            }
        }
        fetchUser()

    }, [])


    return profile;

}

export default useFetchProfile