import React, { useState } from "react";
import EditHeader from "../../components/common/HeaderEdit";
import Publication from "../../components/common/Publication";
import HorizontalCards from "../../components/common/HorizontalCards";
import DropDown from "../../components/common/dropDown";

const SearchFilterResult: React.FC = () => {
  const currentPath = window.location.pathname;
  const choices = ["Followed", "not followed"];
  const [dropDownIsVisible, setVisibility] = useState(false);

  const showDropDown = () => {
    setVisibility(!dropDownIsVisible);
  };

  const pathSegments = currentPath.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const isPublication = lastSegment === "publication";
  return (
    <>
      <EditHeader name={isPublication ? "Publications" : "Users"} />
      <div className="flex mt-16 mb-2 mx-2">
        <p
          className=" border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
          onClick={() => {
            showDropDown();
          }}
        >
          Followed
        </p>
        {dropDownIsVisible && <DropDown choices={choices} />}
      </div>
      {isPublication ? (
        <div>
          <Publication />
          <Publication />
        </div>
      ) : (
        <div>
          <HorizontalCards
            name="Rakotoarivelo Miandry"
            desc="50k Followers - Antananarivo"
          />
          <HorizontalCards
            name="Ny Hasina Finaritra"
            desc="60k Followers - Majunga"
          />
          <HorizontalCards
            name="Andritiana Steve"
            desc="70k Followers - Diego"
          />
        </div>
      )}
    </>
  );
};
export default SearchFilterResult;
