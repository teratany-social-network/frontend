import React from "react";
import profileDefault from "../../../assets/userPics.jpg";

interface PageListCardsProps {
  name: string;
  desc: string;
  isFollowed: boolean;
}
const PageListCard: React.FC<PageListCardsProps> = ({
  name,
  desc,
  isFollowed,
}) => {
  return (
    <div className="mx-1 w-full p-2 mb-4">
      <div className="flex items-center">
        <div className="w-16">
          <img
            alt="page"
            className=" !w-10 !h-10 rounded-full shadow-lg flex-2"
            src={profileDefault}
          />
        </div>
        <div className="flex flex-col items-start px-4 w-full flex-5">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500 mb-1">{desc}</p>
        </div>
        <div className="mr-4 flex-3">
          {isFollowed ? (
            <p className="font-bold text-sm">Follow</p>
          ) : (
            <p className="font-normal text-sm text-gray-400">UnFollow</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageListCard;
