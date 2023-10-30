import React, { useState } from "react";
import TopBar from "../../components/common/TopBar";
import Button from "../../components/common/Button";
import Publication from "../../components/Publication/Publication";
import { BottomDrawer } from "../../components/common/BottomDrawer";

const PageProfile: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const closeDrawer = () => setDrawerOpen(false)
  const changeDrawerStatus = () => setDrawerOpen(true)
  const DetailsComponent = <Details />
  return (
    <>
      <TopBar text="Symbiozis" />
      <div className="mt-16 pb-6 border-b border-gray-200">
        <div className="flex items-start justify-evenly">
          <div className="flex flex-col">
            <img className="w-20 h-20 object-cover rounded-full  border-2 border-pink-600 p-1" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile" />
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
          <Button width="" height="h-7" name="Details" onClick={changeDrawerStatus} />
        </div>
      </div>
      <Publication />
      <Publication />
      <Publication />
      <Publication />
      <Publication />

      <BottomDrawer isOpen={drawerOpen} onClose={closeDrawer} content={DetailsComponent} title="Details" />
    </>
  );
};

export default PageProfile;



interface IODD {
  text: string
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
  return (
    <>
      <div className=" flex flex-col items-center justify-center pb-16">
        <div className="p-4 space-y-2">
          <ODD text="No poverty" />
          <ODD text="Zero hunger" />
          <ODD text="Good health and well-being" />
          <ODD text="Quality education" />
          <ODD text="Gender equality" />
          <ODD text="Clear water and sanitation" />
          <ODD text="Affordable and clean energy" />
          <ODD text="Decent work and growth" />
        </div>
      </div></>
  )
}