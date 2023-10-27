import React from "react";

const SearchFilterBar: React.FC = () => {
  return (
    <div className="flex my-2">
      <p className="w-1/5 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2">
        All
      </p>
      <p className="w-1/2 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2">
        Publication
      </p>
      <p className="w-1/3 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2">
        User
      </p>
      <p className="w-1/3 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2">
        Page
      </p>
    </div>
  );
};
export default SearchFilterBar;
