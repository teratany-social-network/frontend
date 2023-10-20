import React from "react";
import { IoSettingsOutline } from "@react-icons/all-files/io5/IoSettingsOutline";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
import { useNavigate } from "react-router-dom";

interface TopNavBarProps {
  user: string;
}

const TopNavBar: React.FC<TopNavBarProps> = (props: any) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-12 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-full px-2 max-w-lg mx-auto font-medium">
        <button
          onClick={() => {
            navigate("/edit-page");
          }}
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 hover:bg-gray-50 dark:hover-bg-gray-800 group"
        >
          <IoSettingsOutline size={28} color="black" />
        </button>
        <div className=" flex items-center">
          <HiOutlineChevronDown size={22} />
          <p className="pr-3 pl-2">{props.user}</p>
        </div>
      </div>
    </div>
  );
};
export default TopNavBar;
