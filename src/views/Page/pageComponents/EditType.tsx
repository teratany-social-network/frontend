import React from "react";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { MdSecurity } from "@react-icons/all-files/md/MdSecurity";
import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import { BiPhotoAlbum } from "@react-icons/all-files/bi/BiPhotoAlbum";
import { useNavigate } from "react-router-dom";

interface EditTypeProps {
  type: string;
}

const EditType: React.FC<EditTypeProps> = (props: any) => {
  const navigate = useNavigate();
  let icon = <FaRegUserCircle size={23} />; // Icône par défaut
  let navigationPath = "/edit-profile";

  if (props.type === "Edit Password") {
    icon = <MdSecurity size={23} />;
    navigationPath = "/edit-password";
  } else if (props.type === "Location parameter") {
    icon = <MdMyLocation size={23} />;
    navigationPath = "/edit-location";
  } else if (props.type === "Profile picture") {
    icon = <BiPhotoAlbum size={23} />;
    navigationPath = "/edit-picture";
  }

  return (
    <div
      className="flex items-center mb-5 cursor-pointer"
      onClick={() => navigate(navigationPath)}
    >
      {icon}
      <p className="px-3 text-lg font-normal">{props.type}</p>
    </div>
  );
};

export default EditType;
