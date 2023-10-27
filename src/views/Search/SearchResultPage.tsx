import React from "react";
import SearchBar from "../../components/common/SearchBar";
import SearchFilterBar from "../../components/common/SearchFilterBar";
import { HiArrowNarrowLeft } from "@react-icons/all-files/hi/HiArrowNarrowLeft";
import Publication from "../../components/common/Publication";
import HorizontalCards from "../../components/common/HorizontalCards";

const SearchResult: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="mx-3 my-4">
        <div className="flex items-center">
          <HiArrowNarrowLeft
            size={30}
            className="mr-4"
            onClick={handleGoBack}
          />
          <SearchBar />
        </div>
        <SearchFilterBar />
      </div>
      <div className="flex w-full flex-col pb-3 items-start border-b border-b-1">
        <p className="mx-3 mt-2 font-medium ">Users</p>
        <HorizontalCards
          name="Rakotoarivelo Miandry"
          desc="50k Followers - Antananarivo"
        />
        <HorizontalCards
          name="Ny Hasina Finaritra"
          desc="60k Followers - Majunga"
        />
        <HorizontalCards name="Andritiana Steve" desc="70k Followers - Diego" />
      </div>
      <div className="flex flex-col items-start">
        <p className="mx-3 mt-2 font-medium ">Publications</p>
        <Publication />
        <Publication />
      </div>
    </>
  );
};
export default SearchResult;
