import React, { useState } from "react";
import TopBar from "../../components/common/TopBar";
import Button from "../../components/common/Button";

const PageProfile: React.FC = () => {
  const [oddModal, setOddModal] = useState(false)
  return (
    <>
      <TopBar text="Symbiozis" />
      <div className="" onClick={() => setOddModal(false)}>
        {oddModal && <InfoModal title="ODD" />}

      </div>
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
            <div onClick={() => setOddModal(true)} className="flex  items-center justify-evenly my-3">
              <div className="flex flex-wrap w-full">
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-black rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-1 mb-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-2">
          <Button width="w-1/2" height="h-7" name="Unfollow" />
          <Button width="w-1/2" height="h-7" name="message" />
          <Button width="" height="h-7" name="SDG" onClick={() => setOddModal(true)} />
        </div>
      </div>
    </>
  );
};

export default PageProfile;


interface Props {
  title: string;
}

const InfoModal: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="w-screen h-screen background bg-black bg-opacity-50 z-1000 fixed top-0 left-0 right-0">
        <div data-modal-backdrop="static" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">

              <div className="p-4 space-y-2">
                <ODD text="No poverty" />
                <ODD text="Zero hunger" />
                <ODD text="Good health and well-being" />
                <ODD text="Quality education" />
                <ODD text="Gender equality" />
                <ODD text="Clear water and sanitation" />
                <ODD text="Affordable and clean energy" />
                <ODD text="Decent work and growth" />
                {/* <ODD text="Industry, innovation and infrastructure" /> */}
                {/* <ODD text="Reduce inequalities" />
                <ODD text="Sustainable cities and communities" />
                <ODD text="Responsable consumption and production" />
                <ODD text="Climate action" />
                <ODD text="Life below water" />
                <ODD text="Life on land" />
                <ODD text="Peace, justice" />
                <ODD text="Partenerships for other goals" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


interface IODD {
  text: string
}
export const ODD: React.FC<IODD> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <label className="inline-flex items-center mt-1">
      <span className="text-gray-500 bg-white rounded-full border border-gray-200 text-sm font-medium px-5 py-2.5 mr-3">
        {text}
      </span>

    </label>
  );
};