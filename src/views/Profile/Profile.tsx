import React, { useEffect } from "react";
import TopNavBarProfile from "components/TopNavBarProfile";
import Button from "components/common/Button";
import Publication from "components/Publication/Publication";
import SwitchAccountDrawer from "components/SwitchAccountDrawer";
import { IProfile } from "types/profile.type";
import { FileServerURL } from "api/FileApi";
import { BottomDrawer } from "components/common/BottomDrawer";
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle";
import { IoMailUnreadOutline } from "@react-icons/all-files/io5/IoMailUnreadOutline";
import { BsPhone } from "@react-icons/all-files/bs/BsPhone";
import { MdLocationCity } from "@react-icons/all-files/md/MdLocationCity";
import { BsWallet } from "@react-icons/all-files/bs/BsWallet";
import { GiWorld } from "@react-icons/all-files/gi/GiWorld";
import { BiTargetLock } from "@react-icons/all-files/bi/BiTargetLock";
import EditType from "components/EditType";
import { withAsync } from "helpers/withAsync";
import { getById } from "api/ProfileApi";
import { useParams } from "react-router-dom";
import useToken from "hooks/useToken";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useFetchProfile from "hooks/useFetchProfile";
import { getPublicationByProfile } from "../../api/PublicationApi";
import { IPublication } from "../../types/publication.type";

const Profile: React.FC = () => {
  const [openBottom, setOpenBottom] = React.useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const profileConnectedUser = useFetchProfile();
  const [profile, setProfile] = React.useState<IProfile>();
  const [publications, setPublications] = React.useState<IPublication[]>();
  const token = useToken();

  const openDrawerBottom = () => {
    setOpenBottom(true);
  };

  const closeDrawerBottom = () => {
    setOpenBottom(false);
  };

  const closeDrawer = () => setDrawerOpen(false);
  const changeDrawerStatus = () => setDrawerOpen(true);

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
      setProfile(response?.data as IProfile);
    }
  };

  const fetchPublications = async () => {
    if (profileConnectedUser) {
      const { error, response } = await withAsync(() =>
        getPublicationByProfile(token, id!, profileConnectedUser?._id!)
      );
      if (error instanceof AxiosError) {
        const error_message: string =
          error?.response?.data.description ||
          error?.response?.data ||
          error.message;
        toast.error(error_message);
      } else {
        setPublications(response?.data as Array<IPublication>);

        console.log("Publications ", response?.data);
      }
    }
  };

  const DetailsComponent = (
    <Details
      profileType={profile?.profileType}
      address={profile?.localisation?.address.value}
      description={profile?.description}
      email={profile?.contact?.email}
      location={profile?.localisation?.country.value}
      phone={profile?.contact?.phone}
      website={profile?.contact?.website}
      wallet={profile?.deviantWalletId}
    />
  );

  useEffect(() => {
    fetchProfile();
    fetchPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, profileConnectedUser?._id]);

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
              src={
                profile?.image
                  ? FileServerURL + profile.image
                  : "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              }
              alt="profile"
            />
            <p className="text-lg mb-3">{profile?.name}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col ">
                <p className="text-lg font-medium">
                  {profile?.publications?.length!}
                </p>
                <p className="">
                  {profile?.publications?.length! > 1 ? "Posts" : "Post"}
                </p>
              </div>
              <div className="flex flex-col mx-6">
                <p className="text-lg font-medium">
                  {profile?.followers?.length!}
                </p>
                <p className="">
                  {profile?.followers?.length! > 1 ? "Followers" : "Follower"}
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-lg font-medium">
                  {profile?.localisation?.country?.value}
                </p>
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
      <div>
        {profileConnectedUser && (
          <TopNavBarProfile
            user={profileConnectedUser?.name as string}
            path="/profile/edit/menu"
            onClick={openDrawerBottom}
          />
        )}
      </div>

      {profile?.profileType === "user" ? <UserProfile /> : <PageProfile />}
      <div className="flex flex-col-reverse">
        {publications?.map((pub) => (
          <Publication
            key={pub?._id}
            _id={pub?._id}
            profileId={pub?.profile?._id}
            profileName={pub?.profile?.name}
            profileImage={pub?.profile?.image}
            date={pub?.date}
            comments={pub?.numberOfComments}
            reactions={pub?.numberOfReactions}
            content={pub?.content}
            images={pub?.images!}
            isReacted={pub.isReacted}
          />
        ))}
      </div>

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

interface DetailsProps {
  profileType?: string;
  description?: string;
  email?: string;
  phone?: string;
  location?: string;
  address?: string;
  website?: string;
  wallet?: string;
}

const Details: React.FC<DetailsProps> = ({
  profileType,
  description,
  email,
  phone,
  location,
  address,
  website,
  wallet,
}) => {
  const pageType = <BsInfoCircle size={23} />;
  const phoneIcon = <BsPhone size={23} />;
  const emailIcon = <IoMailUnreadOutline size={23} />;
  const locationIcon = <BiTargetLock size={23} />;
  const walletIcon = <BsWallet size={23} />;
  const addressIcon = <MdLocationCity size={23} />;
  const websiteIcon = <GiWorld size={23} />;
  return (
    <>
      <div className="mt-2">
        <EditType
          name={profileType === "association" ? "Association" : "Entreprise"}
          type="page"
          path="/profile/edit/general"
          icon={pageType}
        />
        <div className=" rounded-md p-3 border my-2 ">
          <div className="flex gap-3 items-center">
            <h3 className="font-bold">Description</h3>
          </div>

          <p className="flex text-left text-gray-600 mt-2">{description}</p>
        </div>
        <EditType
          name={email!}
          type="page"
          path="/profile/edit/location"
          icon={emailIcon}
        />
        {phone && (
          <EditType
            name={phone!}
            type="page"
            path="/profile/edit/picture"
            icon={phoneIcon}
          />
        )}
        {location && (
          <EditType
            name={location!}
            type="page"
            path="/profile/edit/picture"
            icon={locationIcon}
          />
        )}
        {address && (
          <EditType
            name={address!}
            type="page"
            path="/profile/edit/picture"
            icon={addressIcon}
          />
        )}
        {website && (
          <EditType
            name={website!}
            type="page"
            path="/profile/edit/picture"
            icon={websiteIcon}
          />
        )}
        {wallet && (
          <EditType
            name={wallet!}
            type="page"
            path="/profile/edit/picture"
            icon={walletIcon}
          />
        )}
      </div>
    </>
  );
};
