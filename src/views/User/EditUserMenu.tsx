import React, { useState } from "react";
import EditType from "../../components/EditType";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import { FiChevronUp } from "@react-icons/all-files/fi/FiChevronUp";
import { GrAddCircle } from "@react-icons/all-files/gr/GrAddCircle";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/common/TopBar";

const EditUser: React.FC = () => {
  const [accordionVisible, setVisibility] = useState(false);
  const navigate = useNavigate();

  const showAccordion = () => {
    setVisibility(!accordionVisible);
  };
  return (
    <>
      <TopBar text="User settings" />
      <div className="mt-2 mx-4 ">
        <EditType name="General" type="user" path="/user-general" />
        <EditType name="Profile picture" type="user" path="/user-picture" />
        <EditType name="Edit Password" type="user" path="/user-password" />
        <EditType name="Location parameter" type="user" path="/user-location" />
      </div>
      <div className="mx-2 my-4">
        <div
          className="flex items-center justify-between mr-4 mb-2"
          onClick={showAccordion}
        >
          <p className="flex items-start mx-1 pb-1 text-xl font-medium">
            My pages
          </p>
          {accordionVisible ? (
            <FiChevronUp
              size={30}
              className="transition-transform ease-in-out"
            />
          ) : (
            <FiChevronDown
              size={30}
              className="transition-transform ease-in-out"
            />
          )}
        </div>
        {accordionVisible && (
          <div className="h-52 overflow-y-auto mx-2 transition-transform ease-in-out "></div>
        )}
        <div
          className="flex items-center my-4 mx-1"
          onClick={() => {
            navigate("/add-page");
          }}
        >
          <GrAddCircle size={28} />
          <p className="px-3 text-md">Add page</p>
        </div>
      </div>
    </>
  );
};

export default EditUser;
