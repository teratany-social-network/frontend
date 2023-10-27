import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFilterBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex my-2">
      <p className="w-1/5 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2">
        All
      </p>
      <p
        className="w-1/2 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
        onClick={() => {
          navigate("/search/result/publication");
        }}
      >
        Publication
      </p>
      <p
        className="w-1/3 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2"
        onClick={() => {
          navigate("/search/result/user");
        }}
      >
        User
      </p>
      <p className="w-1/3 border border-1 rounded-lg border-gray-200 mx-1 text-center px-2">
        Page
      </p>
    </div>
  );
};
export default SearchFilterBar;
