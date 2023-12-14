import React from "react";
import { IProfile } from "../../types/profile.type";
import { FileServerURL } from "../../api/FileApi";
import Button from "../../components/common/Button";

interface UserProfileProps {
  profile: IProfile;
  idUserViewed: string;
  profileConnectedUser: IProfile;
  onClick: () => void;
  followText: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  profile,
  profileConnectedUser,
  idUserViewed,
  onClick,
  followText,
}) => {
  return (
    <div className="mt-16 pb-3 flex w-full justify-evenly items-center border-b border-gray-200">
      <img
        className="w-20 h-20 object-cover rounded-full
                 border-2 border-pink-600 p-1 mr-2"
        src={
          profile?.image
            ? FileServerURL + profile.image
            : "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        }
        alt="profile"
      />
      <div className="flex flex-col">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-normal mb-1">
            {profile?.name ?? "User"}
          </h2>

          <ul className="flex space-x-8 mb-2">
            <li>
              <span className="font-semibold">
                {profile?.publications?.length!}{" "}
              </span>
              {profile?.publications?.length! > 1 ? "Posts" : "Post"}
            </li>

            <li>
              <span className="font-semibold">
                {profile?.followers?.length!}{" "}
              </span>
              {profile?.followers?.length! > 1 ? "Followers" : "Follower"}
            </li>
          </ul>
        </div>
        {profileConnectedUser?._id !== idUserViewed && (
          <div className="flex items-center w-full">
            <Button
              width="w-full"
              height="h-7"
              name={followText}
              onClick={onClick}
            />
            <Button width="w-1/3" height="h-7" name="Message" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
