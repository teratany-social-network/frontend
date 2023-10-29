import React from "react";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
interface recentProps {
  searchValue: string;
}

const RecentCard: React.FC<recentProps> = (props) => {
  return (
    <>
      <div className="mx-3 mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <RiSearchLine size={22} />
          <p className="text-base px-3">{props.searchValue}</p>
        </div>
        <MdClose size={24} />
      </div>
      <div className="mx-3 mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-lg"
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt=""
          />
          <p className="text-base px-3">{props.searchValue}</p>
        </div>
        <MdClose size={24} />
      </div>
    </>
  );
};
export default RecentCard;
