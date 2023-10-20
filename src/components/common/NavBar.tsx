import React from "react";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import { RiSearchFill } from "@react-icons/all-files/ri/RiSearchFill";
import { IoMap } from "@react-icons/all-files/io5/IoMap";
import { IoMapOutline } from "@react-icons/all-files/io5/IoMapOutline";
import { BsFillPlusSquareFill } from "@react-icons/all-files/bs/BsFillPlusSquareFill";
import { BsPlusSquare } from "@react-icons/all-files/bs/BsPlusSquare";
import ProfilePicture from "../../assets/Teratany_ico/apple-touch-icon-180x180.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  const toPublication = () => {
    navigate("/publication");
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-14 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around h-full max-w-lg mx-auto font-medium">
        <button
          onClick={() => {
            handleButtonClick("home");
            navigate("/");
          }}
          type="button"
          className="inline-flex flex-col items-center justify-center px-4 hover:bg-gray-50 dark:hover-bg-gray-800 group"
        >
          {activeButton === "home" ? (
            <AiFillHome size={30} color="black" />
          ) : (
            <AiOutlineHome size={30} color="black" />
          )}
        </button>
        <button
          onClick={() => handleButtonClick("search")}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover-bg-gray-800 group"
        >
          {activeButton === "search" ? (
            <RiSearchFill size={30} color="black" />
          ) : (
            <RiSearchLine size={30} color="black" />
          )}
        </button>
        <button
          onClick={() => {
            handleButtonClick("addPub");
            toPublication();
          }}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover-bg-gray-800 group"
        >
          {activeButton === "addPub" ? (
            <BsFillPlusSquareFill
              size={28}
              color="black"
              onClick={toPublication}
            />
          ) : (
            <BsPlusSquare size={28} color="black" />
          )}
        </button>
        <button
          onClick={() => handleButtonClick("setting")}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover-bg-gray-800 group"
        >
          {activeButton === "setting" ? (
            <IoMap size={30} color="black" />
          ) : (
            <IoMapOutline size={30} color="black" />
          )}
        </button>
        <button
          onClick={() => {
            handleButtonClick("");
            navigate("/profile");
          }}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <img
            src={ProfilePicture}
            className="w-8 h-8 border-2 rounded-full border-black"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
