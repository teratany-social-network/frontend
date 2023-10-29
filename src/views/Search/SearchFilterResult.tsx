import React, { useState } from "react";
// import EditHeader from "../../components/common/HeaderEdit";
import Publication from "../../components/Publication/Publication";
import HorizontalCards from "../../components/HorizontalCards";
import DropDown from "../../components/common/dropDown";
import TopBar from "../../components/common/TopBar";

const SearchFilterResult: React.FC = () => {
  const currentPath = window.location.pathname;
  const choices = ["Followed", "not followed"];
  const [dropDownIsVisible, setVisibility] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(choices[0]);

  const showDropDown = () => {
    setVisibility(!dropDownIsVisible);
  };

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
  };

  const pathSegments = currentPath.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const isPublication = lastSegment === "publication";
  return (
    <>
      <TopBar text={isPublication ? "Publications" : "Users"} />
      <div className="flex mt-6 mb-2 mx-2">
        <p
          className=" border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
          onClick={() => {
            showDropDown();
          }}
        >
          {selectedChoice}
        </p>
        {dropDownIsVisible && (
          <DropDown
            choices={choices}
            onChoiceSelect={handleChoiceSelect}
            closeOnSelect={showDropDown}
          />
        )}
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
