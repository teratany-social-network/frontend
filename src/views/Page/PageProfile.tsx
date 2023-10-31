import React, { useState } from "react";
import TopBar from "../../components/common/TopBar";
import Button from "../../components/common/Button";
import Publication from "../../components/Publication/Publication";
import { BottomDrawer } from "../../components/common/BottomDrawer";
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle";
import { IoMailUnreadOutline } from "@react-icons/all-files/io5/IoMailUnreadOutline";
import { BsPhone } from "@react-icons/all-files/bs/BsPhone";
import { MdLocationCity } from "@react-icons/all-files/md/MdLocationCity";
import { BsWallet } from "@react-icons/all-files/bs/BsWallet";
import { GiWorld } from "@react-icons/all-files/gi/GiWorld";
import { BiTargetLock } from "@react-icons/all-files/bi/BiTargetLock";
import EditType from "../../components/EditType";

const PageProfile: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const closeDrawer = () => setDrawerOpen(false);
  const changeDrawerStatus = () => setDrawerOpen(true);
  const DetailsComponent = <Details />;
  return (
    <>
      <TopBar text="Symbiozis" />
      <div className="mt-16 pb-6 border-b border-gray-200">
        <div className="flex items-start justify-evenly">
          <div className="flex flex-col">
            <img
              className="w-20 h-20 object-cover rounded-full  border-2 border-pink-600 p-1"
              src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="profile"
            />
            <p className="text-lg mb-3">Symbiozis</p>
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
      <Publication />
      <Publication />
      <Publication />
      <Publication />
      <Publication />

      <BottomDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        content={DetailsComponent}
        title="Details"
      />
    </>
  );
};

export default PageProfile;

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
