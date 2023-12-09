import React, { useState } from "react";
import Button from "./common/Button";
import { FileServerURL } from "../api/FileApi";
import { withAsync } from "../helpers/withAsync";
import { followProfile } from "../api/ProfileApi";
import useFetchProfile from "../hooks/useFetchProfile";
import useToken from "../hooks/useToken";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface horizontalCardsProps {
  name: string;
  desc: string;
  image?: string;
  _id?: string;
  isFollowed?: string;
}

const HorizontalCards: React.FC<horizontalCardsProps> = ({
  name,
  desc,
  image,
  _id,
  isFollowed,
}) => {
  const token = useToken();
  const profileConnectedUser = useFetchProfile();
  const [followText, setFollowText] = useState<string>(isFollowed!);

  const follow = async () => {
    setFollowText(followText === "Follow" ? "UnFollow" : "Follow");
    const { error } = await withAsync(() =>
      followProfile(token, profileConnectedUser?._id, _id)
    );
    if (error instanceof AxiosError) {
      const error_message: string =
        error?.response?.data.description ||
        error?.response?.data ||
        error.message;
      toast.error(error_message);
    }
  };

  return (
    <div className="mx-1 w-full p-2 ">
      <div className="flex items-center">
        <Link to={`/profile/${_id}`} className="mr-4">
          <img
            alt="profile"
            className="rounded-full w-12 h-12 max-h-12 max-w-12 min-w-12 min-h-12 object-cover mr-4"
            src={
              image
                ? FileServerURL + image
                : "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            }
          />
        </Link>
        <div className="flex flex-col items-start pr-4 w-full">
          <Link to={`/profile/${_id}`}>
            <p className="font-medium">{name}</p>
          </Link>
          <p className="text-sm text-gray-500 mb-1">{desc}</p>
          {profileConnectedUser?._id === _id ? null : (
            <Button
              width="w-full"
              height="py-2"
              name={followText}
              onClick={follow}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default HorizontalCards;
