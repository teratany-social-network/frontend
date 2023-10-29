import React from "react";
import TopBar from "../../components/common/TopBar";
import Button from "../../components/common/Button";
// import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
// import Publication from "../../components/Publication/Publication";

const PageProfile: React.FC = () => {
  return (
    <>
      <TopBar text="Symbiozis" />
      <div className="mt-16 pb-6 border-b border-gray-200">
        <div className="flex items-start justify-evenly">
          <div className="flex flex-col">
            <img
              className="w-20 h-20 object-cover rounded-full
            border-2 border-pink-600 p-1"
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
            <div className="flex items-center justify-evenly my-3">
              <div className="flex flex-wrap w-full">
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-sm mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-sm mr-1 mb-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-2">
          <Button width="w-1/2" height="h-7" name="Unfollow" />
          <Button width="w-1/2" height="h-7" name="message" />
        </div>
      </div>
    </>
  );
};

export default PageProfile;
