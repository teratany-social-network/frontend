import React, { useEffect } from "react";
import TopNavBarProfile from "../../components/TopNavBarProfile";
import Button from "../../components/common/Button";
import Publication from "../../components/Publication/Publication";
import SwitchAccountDrawer from "../../components/SwitchAccountDrawer";
import { IUser } from "../../types/user.type";
import { FileServerURL } from "../../api/FileApi";
import { BottomDrawer } from "../../components/common/BottomDrawer";
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle";
import { IoMailUnreadOutline } from "@react-icons/all-files/io5/IoMailUnreadOutline";
import { BsPhone } from "@react-icons/all-files/bs/BsPhone";
import { MdLocationCity } from "@react-icons/all-files/md/MdLocationCity";
import { BsWallet } from "@react-icons/all-files/bs/BsWallet";
import { GiWorld } from "@react-icons/all-files/gi/GiWorld";
import { BiTargetLock } from "@react-icons/all-files/bi/BiTargetLock";
import EditType from "../../components/EditType";
import { withAsync } from "../../helpers/withAsync";
import { getById } from "../../api/UserApi";
import { useParams } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setAccountConnected } from "../../store/reducer/account.reducer";

const Profile: React.FC = () => {
  const [openBottom, setOpenBottom] = React.useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [profile, setProfile] = React.useState<IUser>();
  const token = useToken();
  const dispatch = useDispatch<AppDispatch>();

  const openDrawerBottom = () => {
    setOpenBottom(true);
  };

  const closeDrawerBottom = () => {
    setOpenBottom(false);
  };

  const closeDrawer = () => setDrawerOpen(false);
  const changeDrawerStatus = () => setDrawerOpen(true);

  const DetailsComponent = <Details />;

  const { id } = useParams();

  const fetchProfile = async () => {
    const { error, response } = await withAsync(() => getById(token, id));

    if (error instanceof AxiosError) {
      const error_message: string =
        error?.response?.data.description ||
        error?.response?.data ||
        error.message;
      toast.error(error_message);
    } else {
      setProfile(response?.data as IUser);
    }
  };

  const accountSwitcher: any[] = [];

  accountSwitcher.push({
    id: profile?._id,
    name: profile?.name,
    followers: profile?.followers?.length,
    image: profile?.image,
  });

  profile?.administratedProfiles?.forEach((account: any) => {
    accountSwitcher.push({
      id: account?.id,
      name: account?.name,
      followers: account?.numberOfFollowers,
      image: account?.image,
    });
  });

  dispatch(setAccountConnected({ account: accountSwitcher }));

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UserProfile: React.FC = () => {
    return (
      <div className="mt-16 pb-3 flex w-full justify-evenly items-center border-b border-gray-200">
        <img
          className="w-20 h-20 object-cover rounded-full
               border-2 border-pink-600 p-1"
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
    );
  };

  const PageProfile: React.FC = () => {
    return (
      <div className="mt-16 pb-6 border-b border-gray-200">
        <div className="flex items-start justify-evenly">
          <div className="flex flex-col">
            <img
              className="w-20 h-20 object-cover rounded-full  border-2 border-pink-600 p-1"
              src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="profile"
            />
            <p className="text-lg mb-3">{profile?.name}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col ">
                <p className="text-lg font-medium">18</p>
                <p className="">Posts</p>
              </div>
              <div className="flex flex-col mx-6">
                <p className="text-lg font-medium">354</p>
                <p className="">Followers</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-lg font-medium">MG</p>
                <p className="">Location</p>
              </div>
            </div>
            <div className="flex  items-center justify-evenly my-3">
              <div className="flex flex-wrap w-full">
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-2">
          <Button width="w-1/2" height="h-7" name="Unfollow" />
          <Button width="w-1/2" height="h-7" name="message" />
          <Button
            width=""
            height="h-7"
            name="Details"
            onClick={changeDrawerStatus}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div onClick={openDrawerBottom}>
        <TopNavBarProfile
          user={profile?.name as string}
          path="/user/edit/menu"
        />
      </div>

      {profile?.profileType === "user" ? <UserProfile /> : <PageProfile />}

      <Publication />
      <Publication />
      <Publication />
      {profile?.profileType === "user" ? (
        <SwitchAccountDrawer
          id={id}
          openBottom={openBottom}
          closeBottom={closeDrawerBottom}
        />
      ) : (
        <>
          <BottomDrawer
            isOpen={drawerOpen}
            onClose={closeDrawer}
            content={DetailsComponent}
            title="Details"
          />
          <SwitchAccountDrawer
            id={id}
            openBottom={openBottom}
            closeBottom={closeDrawerBottom}
          />
        </>
      )}
    </>
  );
};

export default Profile;

interface IODD {
  text: string;
}
export const ODD: React.FC<IODD> = ({ text }) => {
  return (
    <label className="inline-flex items-center mt-1">
      <span className="text-gray-500 bg-white rounded-full border border-gray-200 text-sm font-medium px-5 py-2.5 mr-3">
        {text}
      </span>
    </label>
  );
};

const Details: React.FC = () => {
  const pageType = <BsInfoCircle size={23} />;
  const phone = <BsPhone size={23} />;
  const email = <IoMailUnreadOutline size={23} />;
  const location = <BiTargetLock size={23} />;
  const wallet = <BsWallet size={23} />;
  const address = <MdLocationCity size={23} />;
  const website = <GiWorld size={23} />;
  return (
    <>
      <div className="mt-2">
        <EditType
          name="Entreprise"
          type="page"
          path="/user/edit/general"
          icon={pageType}
        />
        <div className=" rounded-md p-3 border my-2 ">
          <div className="flex gap-3 items-center">
            <h3 className="font-bold">Description</h3>
          </div>

          <p className="flex text-left text-gray-600 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ducimus
            deserunt assumenda animi ullam nesciunt, nihil natus maxime, magni
            qui repellat? Esse, odit animi! Accusantium voluptate consequatur
            omnis perferendis perspiciatis optio dicta sapiente atque, tempora
            vitae doloremque fugiat tenetur sunt.
          </p>
        </div>
        <EditType
          name="Symbiozis@gmail.com"
          type="page"
          path="/user/edit/location"
          icon={email}
        />
        <EditType
          name="+261 34 24 734 56"
          type="page"
          path="/user/edit/picture"
          icon={phone}
        />
        <EditType
          name="Madagascar"
          type="page"
          path="/user/edit/picture"
          icon={location}
        />
        <EditType
          name="Lot II C 89 Z Ivandry"
          type="page"
          path="/user/edit/picture"
          icon={address}
        />
        <EditType
          name="https//Symbiozis.ca"
          type="page"
          path="/user/edit/picture"
          icon={website}
        />
        <EditType
          name="Wallet ID"
          type="page"
          path="/user/edit/picture"
          icon={wallet}
        />
      </div>
    </>
  );
};
