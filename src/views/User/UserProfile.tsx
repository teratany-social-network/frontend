import React from "react";
import TopNavBarProfile from "../../components/TopNavBarProfile";
import Button from "../../components/common/Button";
import Publication from "../../components/Publication/Publication";
import SwitchAccountDrawer from "../../components/SwitchAccountDrawer";
import useFetchUser from "../../hooks/useFetchUser";
import { IUser } from "../../types/user.type";
import { FileServerURL } from "../../api/FileApi";

const UserProfile: React.FC = () => {
  const [openBottom, setOpenBottom] = React.useState<boolean>(false);

  const openDrawerBottom = () => {
    setOpenBottom(true);
  };

  const closeDrawerBottom = () => {
    setOpenBottom(false);
  };

  const user: IUser | undefined = useFetchUser();

  return (
    <>
      <div onClick={openDrawerBottom}>
        <TopNavBarProfile user="Miandry" path="/edit-user" />
      </div>
      <div className="mt-16 pb-3 flex w-full justify-evenly items-center border-b border-gray-200">
        <img
          className="w-20 h-20 object-cover rounded-full
               border-2 border-pink-600 p-1"
          src={
            FileServerURL + user?.image ??
            "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          }
          alt="profile"
        />
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-normal mb-1">
              {user?.displayName ?? "User"}
            </h2>

            <ul className="flex space-x-8 mb-2">
              <li>
                <span className="font-semibold">136 </span>
                posts
              </li>

              <li>
                <span className="font-semibold">40.5k </span>
                followers
              </li>
            </ul>
          </div>
          <div className="flex items-center w-full">
            <Button width="w-full" height="h-7" name="Unfollow" />
            <Button width="w-1/3" height="h-7" name="Message" />
          </div>
        </div>
      </div>
      <Publication />
      <Publication />
      <Publication />
      <SwitchAccountDrawer
        openBottom={openBottom}
        closeBottom={closeDrawerBottom}
      />
    </>
  );
};

export default UserProfile;
