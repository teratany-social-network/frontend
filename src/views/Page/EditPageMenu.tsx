import React from "react";
import EditType from "../../components/EditType";
import TopBar from "../../components/common/TopBar";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import { BiPhotoAlbum } from "@react-icons/all-files/bi/BiPhotoAlbum";

const EditPage: React.FC = () => {
  const userIcon = <FaRegUserCircle size={23} />;
  const profilePicture = <BiPhotoAlbum size={23} />;
  const locationIcon = <MdMyLocation size={23} />;

  return (
    <>
      <TopBar text="Page settings" />
      <div className="mt-2 mx-4">
        <EditType
          name="General"
          type="page"
          path="/profile/edit/general"
          icon={userIcon}
        />
        <EditType
          name="Profile picture"
          type="page"
          path="/profile/edit/picture"
          icon={profilePicture}
        />
        <EditType
          name="Location parameter"
          type="page"
          path="/profile/edit/location"
          icon={locationIcon}
        />
      </div>
    </>
  );
};

export default EditPage;
