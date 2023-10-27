import React from "react";
import SearchBar from "../../components/common/SearchBar";
import RecentCard from "../../components/common/RecentCard";

const Search: React.FC = () => {
  return (
    <>
      <div className="mx-3 mt-4 flex flex-col items-start">
        <SearchBar />
        <p className="pt-1 pb-3 text-ms font-medium">Recent</p>
      </div>
      <RecentCard searchValue="Symbiozis" />
      <RecentCard searchValue="Teratany" />
      <RecentCard searchValue="Rakotoarivelo" />
      <RecentCard searchValue="Africa" />
    </>
  );
};
export default Search;
